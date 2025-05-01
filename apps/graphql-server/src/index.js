const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();
  
  // Enable CORS
  app.use(cors());
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // You can add authentication logic here
      return { token: req.headers.authorization || '' };
    }
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(` GraphQL Server running at http://localhost:\${400}\${server.graphqlPath}`);
  });
}

startServer();