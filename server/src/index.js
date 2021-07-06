const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({typeDefs, mocks:true});

server.listen().then((serverInfo)=>{
  console.log(`
    🚀 Server is running!
    🔉 Listening on port ${serverInfo.port}
    🔗 Server Link ${serverInfo.url}
    📭 Query at https://studio.apollographql.com/dev
  `);
});