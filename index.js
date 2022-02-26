/** 
 * This is the code we use to initialize the Attendees Server.
 * You do not need to change anything here.
*/

import { ApolloServer } from 'apollo-server';
// import { buildFederatedSchema } from '@apollo/federation';

import resolvers from './resolvers';
import typeDefs from './schema'; 

const { buildSubgraphSchema } = require('@apollo/subgraph');

// Set port number
const { PORT = 5001 } = process.env;

// Initialize an Apollo Server instance, with a federated schema
// const server = new ApolloServer({
//   schema: buildFederatedSchema([{ typeDefs, resolvers }])
// });


const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

// Start the server
server.listen({port: PORT}).then(({ url }) => {
    console.log(`🎀 Attendees server ready at ${url} 👩‍💻🧑‍💻`);
});