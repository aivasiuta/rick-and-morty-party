import React, { FC } from 'react'

import { GlobalStyles } from './GlobalStyles'

interface Props {
  children: React.ReactElement[] | React.ReactElement
}

export const StyleProvider: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
