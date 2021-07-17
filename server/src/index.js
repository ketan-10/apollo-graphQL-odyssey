const { ApolloServer} = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers/rest-datasource-resolvers");
const TrackAPI = require("./datasources/track-api");
const mocks = require("./resolvers/mock-resolvers");

// Create a 'Express' server -> using Apollo Library
// send the 'query schema' in typeDefs 
const server = new ApolloServer({
  typeDefs,
  resolvers, 
  dataSources: () => ({
    trackAPI: new TrackAPI()
  }),
});

server.listen().then((serverInfo)=>{
  console.log(`
    🚀 Server is running!
    🔉 Listening on port ${serverInfo.port}
    🔗 Server Link ${serverInfo.url}
    📭 Query at https://studio.apollographql.com/dev
  `);
});