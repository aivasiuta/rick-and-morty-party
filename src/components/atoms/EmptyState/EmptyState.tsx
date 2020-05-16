import React, { FC } from 'react'

import { Styled } from './styled'

interface Props {
  children: React.ReactElement[] | React.ReactElement | string
}

export const EmptyState: FC<Props> = ({ children }): JSX.Element => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>
}
