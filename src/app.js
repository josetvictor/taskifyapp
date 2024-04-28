import express from "express";

import routes from "./routes.js";
import connection from './config/connection.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

connection.sync().then(() => console.log("Database connected")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app run on http://localhost:${port}/`);
});
