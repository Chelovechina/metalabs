import { body, param } from "express-validator";
import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "getAllUsers",
    validation: [],
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "getUserById",
    validation: [param("id").isInt()],
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "createUser",
    validation: [
      body("firstName").isString(),
      body("lastName").isString(),
      body("age").isInt({ min: 0 }),
    ],
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "deleteUser",
    validation: [param("id").isInt()],
  },
  {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "updateUser",
    validation: [
      param("id").isInt(),
      body("firstName").isString(),
      body("lastName").isString(),
      body("age").isInt({ min: 0 }),
    ],
  },
];
