import pg from "pg";

import { databaseInfo } from "../config.js";

export const pool = new pg.Pool({
  user: databaseInfo.username,
  host: databaseInfo.dbhost,
  database: databaseInfo.dbname,
  password: databaseInfo.password,
  port: databaseInfo.dbport,
  url: databaseInfo.dburl,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default function query(text, params) {
  return pool.query(text, params);
}
