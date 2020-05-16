import React, { FC } from 'react'

import { Styled } from './styled'

interface Props {
  children: React.ReactElement[] | React.ReactElement
}

export const LayoutTemplate: FC<Props> = ({ children }): JSX.Element => {
  return <Styled.Container>{children}</Styled.Container>
}
