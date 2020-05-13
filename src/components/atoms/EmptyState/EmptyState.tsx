import React, { FC } from 'react'

import { Styled } from './styled'

interface Props {
  // todo type
  children: any
}

export const EmptyState: FC<Props> = ({ children }): JSX.Element => {
  return (
      <Styled.Wrapper>
        {children}
      </Styled.Wrapper>
  )
}
