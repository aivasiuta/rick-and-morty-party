import React, { FC, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { throttle } from 'lodash'

import { Preloader } from '../../components/atoms/Preloader'
import { CharactersList } from '../../components/organisms/CharactersList'
import { Input } from '../../components/atoms/Input'
import { PartyBlock } from '../../components/organisms/PartyBlock'
import { GET_CHARACTERS, GET_EXCLUDED_CHARACTERS } from '../../apollo/queries'
import { EmptyState } from '../../components/atoms/EmptyState'
import { Styled } from './styled'

interface ExcludedCharactersData {
  excludedCharacters: string[]
}

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
    data: { excludedCharacters },
  } = useQuery<ExcludedCharactersData>(GET_EXCLUDED_CHARACTERS)

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      name,
    },
  })

  const renderResults = () => {
    if (loading) {
      return <Preloader />
    }

    if (error) {
      return <EmptyState>Characters weren&lsquo;t found</EmptyState>
    }

    const filteredCharacters = data.characters.results.filter((character: any) => {
      return !excludedCharacters.includes(character.id)
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
