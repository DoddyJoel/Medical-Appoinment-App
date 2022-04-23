import configDB from "../config/config.js";
import { Sequelize } from "sequelize";
import setupModels from "../db/models/index.js";
const USER = encodeURIComponent(configDB.dbUser);
const PASSWORD = encodeURIComponent(configDB.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${configDB.dbHost}:${configDB.dbPort}/${configDB.dbName}`;

export const sequelize = new Sequelize(URI, {
  dialect: "postgres",
});

setupModels(sequelize);

sequelize.sync();
