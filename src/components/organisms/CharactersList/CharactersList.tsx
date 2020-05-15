import React, { FC } from 'react'

import { Styled } from './styled'
import { CharacterCard } from '../../molecules/CharacterCard'
import { Character } from '../../../models/Character'

interface Props {
  characters: Character[]
}

export const CharactersList: FC<Props> = ({ characters }): JSX.Element => {
  return (
    <Styled.Wrapper>
      {characters.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Styled.Wrapper>
  )
}
