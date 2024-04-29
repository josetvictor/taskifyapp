import 'dotenv/config';

import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import swaggerSetup from "./config/swaggerSetup.js";
import routesConfig from "./routes/index.js";
import connection from './config/connection.js';

const app = express();
const port = process.env.PORT_SERVER_APP;

app.use(cors());
app.use(express.json());
app.use(routesConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup));

connection.sync().then(() => console.log("Database connected")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app run on http://localhost:${port}/v1`);
});
