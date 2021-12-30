import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

const PORT = 4001;

function startServer() {
  mongoose.connect('mongodb://admin:admin@database:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server started at ${url}`);
  });
}

export default startServer;
