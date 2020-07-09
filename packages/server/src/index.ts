// tslint:disable-next-line
require("dotenv").config();
import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

import { redis } from "./redis";

async function createTypeOrmConnectin() {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  console.log(connectionOptions);
  return process.env.NODE_ENV === "production"
    ? createConnection({
        ...connectionOptions,
        name: "default",
      } as any)
    : createConnection({ ...connectionOptions, name: "default" });
}

async function createGQLSchema() {
  return process.env.NODE_ENV === "production"
    ? buildSchema({
        resolvers: [__dirname + "/modules/**/*.js"],
        authChecker: ({ context: { req } }) => {
          if (req.session.userId) {
            return true;
          }
          return false;
        },
      })
    : buildSchema({
        resolvers: [__dirname + "/modules/**/*.ts"],
        authChecker: ({ context: { req } }) => {
          if (req.session.userId) {
            return true;
          }
          return false;
        },
      });
}

const main = async () => {
  const connection = await createTypeOrmConnectin();
  connection.synchronize();
  console.log(process.env.NODE_ENV);
  const apolloServer = new ApolloServer({
    schema: await createGQLSchema(),
    context: ({ req, res }: any) => ({ req, res }),
    playground: true,
    introspection: true,
  });

  const app = Express();

  app.use(
    cors({
      credentials: true,
      origin:
        process.env.NODE_ENV === "production"
          ? process.env.FRONTEND_HOST
          : "http://localhost:3000",
    })
  );

  const RedisStore = connectRedis(session);
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: "hardcodedstring",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );

  apolloServer.applyMiddleware({ app });

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log("Server started");
  });
};

main();
