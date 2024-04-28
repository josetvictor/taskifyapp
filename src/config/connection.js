import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'taskifyapp',
  'josetvictor',
  'senha', 
  { dialect: "postgres", host: "localhost", port: 5432}
);

export default sequelize;