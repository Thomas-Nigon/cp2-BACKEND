import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { dataSource } from "./config/db";
import { CountryResolver } from "./resolver/CountryResolver";

const port = 4000;
if (!port) throw new Error("Missing env variable: BACKEND_PORT");

async function start() {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: port, host: "0.0.0.0" },
  });

  console.log(`🚀  Server ready at: ${url}`);
}
start();
