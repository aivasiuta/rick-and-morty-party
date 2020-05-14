import React, { FC } from 'react'

import { Styled } from './styled'
import { CharacterCard } from '../../molecules/CharacterCard'

interface Props {
  // todo types
  rick: any
  morty: any
}

export const PartyBlock: FC<Props> = ({ rick, morty }): JSX.Element => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Party</Styled.Title>
      <Styled.CardsWrapper>
        <CharacterCard character={rick} placeholder="RICK" />
        <CharacterCard character={morty} placeholder="MORTY" />
      </Styled.CardsWrapper>
    </Styled.Wrapper>
  )
}
