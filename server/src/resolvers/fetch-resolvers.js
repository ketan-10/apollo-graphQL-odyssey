const fetch = require("node-fetch");

const resolvers = {
  Query: {
    // Returns array of Tracks that will be used to populate 
    // The homepage grid of our web client
    trackForHome: async () => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      // form this 'JSON' trackForHome will 'match' with the 'schema'
      return res.json();
    },
  },
  Track: {
    author: async ({ authorId }) => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/author/${authorId}`);
      return res.json();
    },
  },
  // Author:{
  //   name: () => "Ketan"
  // }

}

module.exports = resolvers; 