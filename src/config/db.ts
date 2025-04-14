import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Country } from "../entities/Country";

config();
const { DB_HOST, DB_PASSWORD, DB_USER, DB_SCHEMA, DB_PORT } = process.env;

export const dataSource = new DataSource({
  type: "sqlite",
  // host: DB_HOST,
  // username: DB_USER,
  // password: DB_PASSWORD,
  database: "cp2backend.db",
  // port: Number(DB_PORT),
  entities: [Country],
  synchronize: true,
  // migrations: ["./bdd/migrations/*.ts"],
  // migrationsTableName: "migrations",
});
