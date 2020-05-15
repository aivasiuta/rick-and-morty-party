import React, { FC } from 'react'

import { Styled } from './styled'
import { useQuery } from '@apollo/react-hooks'
import { GET_PARTY_CHARACTERS } from '../../../apollo/queries'
import { PartyCard } from '../../molecules/PartyCard'

export const PartyBlock: FC = (): JSX.Element => {
  // @ts-ignore
  const { data: { mortyImage, rickImage } } = useQuery(GET_PARTY_CHARACTERS)

  return (
    <Styled.CardsWrapper>
      <PartyCard image={rickImage} placeholder="RICK" />
      <PartyCard image={mortyImage} placeholder="MORTY" />
    </Styled.CardsWrapper>
  )
}
