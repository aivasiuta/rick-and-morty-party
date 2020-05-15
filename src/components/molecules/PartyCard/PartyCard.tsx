import React, { FC } from 'react'

import { Styled } from './styled'

interface Props {
  image: string
  placeholder: string
}

export const PartyCard: FC<Props> = ({ image, placeholder }): JSX.Element => (
  <Styled.Wrapper imageUrl={image}>
    {!image && <Styled.Placeholder>{placeholder}</Styled.Placeholder>}
  </Styled.Wrapper>
)
