import { gql } from 'apollo-boost'

export const ADD_EXCLUDED_CHARACTER = gql`
    mutation AddExcludedCharacter($id: Int) {
        addExcludedCharacter(id: $id) @client
    }
`

export const ADD_RICK_IMAGE = gql`
    mutation AddRickImage($image: String) {
        addRickImage(image: $image) @client
    }
`

export const ADD_MORTY_IMAGE = gql`
    mutation AddMortyImage($image: String) {
        addMortyImage(image: $image) @client
    }
`
