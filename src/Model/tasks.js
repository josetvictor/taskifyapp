import { Sequelize } from "sequelize";
import connection from "../config/connection.js";

const Task = connection.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

export default Task;