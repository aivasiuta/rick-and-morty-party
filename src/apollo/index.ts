import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { GET_EXCLUDED_CHARACTERS, GET_PARTY_CHARACTERS } from './queries'

const inMemoryCache = new InMemoryCache()

inMemoryCache.writeData({
  data: {
    excludedCharacters: [],
    mortyImage: null,
    rickImage: null,
  },
})

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: inMemoryCache,
  resolvers: {
    Mutation: {
      addExcludedCharacter: (_root, { id }, { cache }) => {
        const { excludedCharacters } = cache.readQuery({ query: GET_EXCLUDED_CHARACTERS })
        if (excludedCharacters.includes(id)) {
          return null
        }

        const data = {
          excludedCharacters: [...excludedCharacters, id],
        }
        cache.writeQuery({ query: GET_EXCLUDED_CHARACTERS, data })
        return null
      },
      addRickImage: (_root, { image }, { cache }) => {
        const data = { rickImage: image }
        cache.writeQuery({ query: GET_PARTY_CHARACTERS, data })
        return null
      },
      addMortyImage: (_root, { image }, { cache }) => {
        const data = { mortyImage: image }
        cache.writeQuery({ query: GET_PARTY_CHARACTERS, data })
        return null
      },
    },
  },
})
