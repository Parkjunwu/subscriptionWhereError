// // import "dotenv/config";
// import * as express from "express";
// // import morgan from "morgan";
// import { createServer } from "http";
// import { execute, subscribe } from "graphql";
// import { SubscriptionServer } from "subscriptions-transport-ws";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { ApolloServer } from "apollo-server-express";
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
// // import { graphqlUploadExpress } from "graphql-upload";
// // import { typeDefs, resolvers } from "./schema";
// import resolvers from "./resolvers";
// import typeDefs from "./typeDefs";
// // import { handleGetUser } from "./users/users.utils";
// import pubsub from "./pubsub";

// const PORT = process.env.PORT;

// const startServer = async () => {
// const app = express();
// // app.use(morgan("dev"));
// app.use("/uploads", express.static(`${process.cwd()}/uploads`));
// // app.use(graphqlUploadExpress());        업로드 할꺼면 이거 넣어야 되나보네
// const httpServer = createServer(app);
// const schema = makeExecutableSchema({ typeDefs, resolvers });
// const subscriptionServer = SubscriptionServer.create({ schema, execute, subscribe }, { server: httpServer, path: "/graphql" });

// const server = new ApolloServer({
// schema,
// // context: async ({ req }) => {
// // const loggedInUser = await handleGetUser(req.headers.token);
// // return { loggedInUser };
// // },
// plugins: [
// ApolloServerPluginLandingPageGraphQLPlayground,
// {
// async serverWillStart() {
// return {
// async drainServer() {
// subscriptionServer.close();
// },
// };
// },
// },
// ],
// });
// await server.start();
// server.applyMiddleware({ app });

// httpServer.listen(4000, () => {
// console.log(`🚀 Server: http://localhost:4000${server.graphqlPath}`);
// });
// };

// startServer();


import "dotenv/config";
import * as morgan from "morgan";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

(async function () {
  const app = express();
  app.use(morgan("tiny"));
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: '/graphql' }
  );

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            }
          };
        }
      }
    ],
  });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${PORT}/graphql`)
  );
})();
