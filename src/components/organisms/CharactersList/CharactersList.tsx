import React, { FC } from 'react'

import { Styled } from './styled'
import { CharacterCard } from '../../molecules/CharacterCard'

interface Props {
  // todo type
  characters: any[]
  onCharacterClick: any
}

export const CharactersList: FC<Props> = ({ characters, onCharacterClick}): JSX.Element => {
  return (
    <Styled.Wrapper>
      {characters.map((character: any) => (
        <CharacterCard key={character.id} character={character} onClick={onCharacterClick} isCloseable />
      ))}
    </Styled.Wrapper>
  )
}
