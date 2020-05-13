import React, { FC } from 'react'

import { Styled } from './styled'
import { CharacterCard } from '../../molecules/CharacterCard'

interface Props {
  // todo type
  characters: any[]
}

export const CharactersList: FC<Props> = ({ characters }): JSX.Element => {
  return (
    <Styled.Wrapper>
      {characters.map((character: any) => (
        <CharacterCard key={character.id} imageUrl={character.image} name={character.name} />
      ))}
    </Styled.Wrapper>
  )
}
