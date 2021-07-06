const { gql } = require('apollo-server');


// GQL contains 'Types' and 'Fields' 
const typeDefs = gql`

  """
  Query's are entry point to rest of our schema.
  Query's are top level fields that our client can query for
  """
  type Query{
    "Query to get all Tracks array"
    trackForHome: [Track!]!
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
  }

  type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture URL"
    photo: String
  }

`;

module.exports = typeDefs;