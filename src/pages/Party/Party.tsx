import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { throttle } from 'lodash'

import { Preloader } from '../../components/atoms/Preloader'
import { CharactersList } from '../../components/organisms/CharactersList'
import { Input } from '../../components/atoms/Input'
import { PartyBlock } from '../../components/organisms/PartyBlock'
import { GET_CHARACTERS, GET_EXCLUDED_CHARACTERS_IDS } from '../../apollo/queries'
import { EmptyState } from '../../components/atoms/EmptyState'
import { Character, GetCharactersData, GetCharactersVariables } from '../../models/Character'
import { Styled } from './styled'
import { GetExcludedCharactersIds } from '../../models/ExcludedCharacters'

export const Party: FC = (): JSX.Element => {
  const [name, setName] = useState('')

  const throttledSetSearchValue = throttle(setName, 300)

  const handleChangeValue = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value.length < 3) {
      return
    }
    throttledSetSearchValue(value)
  }

  const {
    // @ts-ignore
    data: { excludedCharactersIds },
  } = useQuery<GetExcludedCharactersIds>(GET_EXCLUDED_CHARACTERS_IDS)

  const { loading, error, data } = useQuery<GetCharactersData, GetCharactersVariables>(GET_CHARACTERS, {
    variables: {
      name,
    },
  })

  const renderResults = () => {
    if (loading) {
      return <Preloader />
    }

    if (error || !data || !data.characters || !data.characters.results) {
      return <EmptyState>Characters were not found</EmptyState>
    }

    const filteredCharacters: Character[] = data.characters.results.filter((character: Character) => {
      return !excludedCharactersIds.includes(character.id)
    })

    return <CharactersList characters={filteredCharacters} />
  }

  return (
    <>
      <Styled.Wrapper>
        <Input isClearable onChange={handleChangeValue} />
        {renderResults()}
      </Styled.Wrapper>
      <Styled.Title>Party</Styled.Title>
      <PartyBlock />
    </>
  )
}
