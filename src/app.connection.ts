import knex from "knex";
import config from "../knexfile";

const DB = knex(config[process.env.NODE_ENV || "production"]);

export default DB;
