import React, { FC, FormEvent, useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import * as _ from 'underscore'

import { Preloader } from '../../components/atoms/Preloader'
import { ErrorState } from '../../components/atoms/ErrorState'
import { CharactersList } from '../../components/organisms/CharactersList'
import { Input } from '../../components/atoms/Input'
import { Styled } from './styled'
import { PartyBlock } from '../../components/organisms/PartyBlock'

const GET_CHARACTERS = gql`
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

export const Party: FC = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [morty, setMorty] = useState(null)
  const [rick, setRick] = useState(null)

  // @ts-ignore
  const handleChangeValue = (e: FormEvent<HTMLInputElement>) => setValue(e.target.value)
  const throttledHandleChangeValue = _.throttle(handleChangeValue, 300)

  const handleReset = () => setValue('')

  // @ts-ignore
  const handleSelectCharacter = (character) => {
    // eslint-disable-next-line no-console
    const { name } = character
    const n = name.toLowerCase()
    if (n.indexOf('morty') > -1) {
      setMorty(character)
      return
    }
    if (n.indexOf('rick') > -1) {
      setRick(character)
      return
    }
  }

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name: value,
    },
  })

  return (
    <Styled.Wrapper>
      <Input isClearable value={value} onChange={throttledHandleChangeValue} onReset={handleReset} />
      {loading ? (
        <Preloader />
      ) : (
        <CharactersList characters={data.characters.results} onCharacterClick={handleSelectCharacter} />
      )}
      {error && <ErrorState>Error! ${error.message}</ErrorState>}
      <PartyBlock rick={rick} morty={morty} />
    </Styled.Wrapper>
  )
}
