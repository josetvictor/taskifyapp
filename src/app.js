import 'dotenv/config';
import express from "express";
import cors from "cors";

import routesConfig from "./routes/index.js";
import connection from './config/connection.js';

const app = express();
const port = process.env.PORT_SERVER_APP;

app.use(cors());
app.use(express.json());
app.use(routesConfig);

connection.sync().then(() => console.log("Database connected")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app run on http://localhost:${port}/`);
});
