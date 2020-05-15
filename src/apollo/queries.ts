import { gql } from 'apollo-boost'

export const GET_EXCLUDED_CHARACTERS = gql`
  query GetExcludedCharacters {
    excludedCharacters @client
  }
`

export const GET_PARTY_CHARACTERS = gql`
  query GetPartyCharacters {
    mortyImage @client
    rickImage @client
  }
`

export const GET_CHARACTERS = gql`
  query getCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`
