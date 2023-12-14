require("dotenv").config();

import { AppDataSource } from "./data-source";
import app from "./app";

function handleError(err, req, res, next) {
  res.status(err.statusCode || 500).send({ message: err.message });
}

AppDataSource.initialize()
  .then(async () => {
    app.listen(process.env.APP_PORT || 3000);
    console.log(
      `Express server has started on port ${process.env.APP_PORT || 3000}`
    );
  })
  .catch((error) => console.log(error));
