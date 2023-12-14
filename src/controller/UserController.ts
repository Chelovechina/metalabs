import { AppDataSource } from "../data-source";
import { Request } from "express";
import { User } from "../entity/User";

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  async getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(request: Request) {
    const user = await this.userRepository.findOneBy({
      id: parseInt(request.params.id),
    });

    if (!user) throw Error("User does not exist");

    return user;
  }

  async createUser(request: Request) {
    return this.userRepository.save(request.body);
  }

  async deleteUser(request: Request) {
    const user = await this.userRepository.findOneBy({
      id: parseInt(request.params.id),
    });

    if (!user) throw Error("User does not exist");

    return this.userRepository.remove(user);
  }

  async updateUser(request: Request) {
    const user = await this.userRepository.findOneBy({
      id: parseInt(request.params.id),
    });

    if (!user) throw Error("User does not exist");

    return this.userRepository.save({ ...user, ...request.body });
  }
}
