/**
  1)parent:
    parent is the returned value of the resolver for this field's parent. 
    This will be useful when dealing with resolver chains.
  2)args:
    args is an object that contains all GraphQL arguments that were provided for the field by the GraphQL operation.
    When querying for a specific item (such as a specific track instead of all tracks), 
    in client-land we'll make a query with an id argument that will be accessible via this args parameter in server-land.
  3)context:
    context is an object shared across all resolvers that are executing for a particular operation. 
    The resolver needs this context argument to share state, 
    like authentication information, a database connection, or in our case the RESTDataSource.
  4)info:
    info contains information about the operation's execution state, 
    including the field name, the path to the field from the root, and more. 
    It's not used as frequently as the others, 
    but it can be useful for more advanced actions like setting cache policies at the resolver level.
*/
const resolvers = {
  Query: {
    // Returns array of Tracks that will be used to populate 
    // The homepage grid of our web client
    trackForHome: async (parent,args,context,info) => {
      return context.dataSources.trackAPI.getTracksForHome();      
    },
    track: (_,{id},{dataSources}) => {
      return dataSources.trackAPI.getTrack(id);
    } 
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