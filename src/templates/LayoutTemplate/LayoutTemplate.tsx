import React, { FC } from 'react'

import { Styled } from './styled'

interface Props {
  // todo type
  children: any
}

export const LayoutTemplate: FC<Props> = ({ children }): JSX.Element => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}
