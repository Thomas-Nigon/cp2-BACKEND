import { DataSource } from "typeorm";
import { config } from "dotenv";
import { Country } from "../entities/Country";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "cp2backend.db",
  entities: [Country],
  synchronize: true,
  // migrations: ["./bdd/migrations/*.ts"],
  // migrationsTableName: "migrations",
});
