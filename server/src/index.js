const { ApolloServer, MockList } = require("apollo-server");
const typeDefs = require("./schema");

// Generage Mock data -> using apollo inbuild Mock Generator 
const mocks = {
  Query: () => ({
    // trackForHome: () => [mocks.Track],
    trackForHome: () => new MockList([6,9])
  }),
  Track: () => ({
    id: () => "tack_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: () => "Grumpy Cat",
      photo: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    }),
    thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1020,
    modulesCount: () => 6,
  })
}

// Create a 'Express' server -> using Apollo Library
// send the 'query schema' in typeDefs 
const server = new ApolloServer({typeDefs, mocks:mocks});

server.listen().then((serverInfo)=>{
  console.log(`
    🚀 Server is running!
    🔉 Listening on port ${serverInfo.port}
    🔗 Server Link ${serverInfo.url}
    📭 Query at https://studio.apollographql.com/dev
  `);
});