import React, { FC } from 'react'

import { useQuery } from '@apollo/react-hooks'
import { Styled } from './styled'
import { GET_PARTY_CHARACTERS } from '../../../apollo/queries'
import { PartyCard } from '../../molecules/PartyCard'

export const PartyBlock: FC = (): JSX.Element => {
  // TODO client query type
  const {
    data: { mortyImage, rickImage },
  } = useQuery<any>(GET_PARTY_CHARACTERS)

  return (
    <Styled.CardsWrapper>
      <PartyCard image={rickImage} placeholder="RICK" />
      <PartyCard image={mortyImage} placeholder="MORTY" />
    </Styled.CardsWrapper>
  )
}
