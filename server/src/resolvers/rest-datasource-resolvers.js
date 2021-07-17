// parent, args, context, info 
const resolvers = {
  Query: {
    // Returns array of Tracks that will be used to populate 
    // The homepage grid of our web client
    trackForHome: async (parent,args,context,info) => {
      return context.dataSources.trackAPI.getTracksForHome();      
    },
  },
  Track: {
    author: async ({authorId},_,{dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
  // Author:{
  //   name: () => "Ketan"
  // }

}

module.exports = resolvers; 