const { gql } = require('apollo-server');


// GQL contains 'Types' and 'Fields'
// analogy: 'Types' -> 'Table', 'Fields' -> 'Columns'  
// 'Query' defines starting point -> all request start from Query  
const typeDefs = gql`

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  """
  Query's are entry point to rest of our schema.
  Query's are top level fields that our client can query for
  """
  type Query{
    "Query to get all Tracks array"
    trackForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
  }

  "Track is a group of Modules that teaches about a sepcific topic"
  type Track{
    id: ID!
    "The tracks title"
    title: String!
    "The tracks main Author Details"
    author: Author!
    "The tracks Thumbnails URL"
    thumbnail: String
    "The Tracks approximate length to complete, in minutes"
    length: Int
    "The number of module the track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }

  "Author of complete Track or Module"
  type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture URL"
    photo: String
  }

`;

module.exports = typeDefs;