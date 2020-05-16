import { gql } from 'apollo-boost'

export const typeDefs = gql`
  extend type Query {
    excludedCharactersIds: [String]!
    mortyImage: String!
    rickImage: String!
  }
`
