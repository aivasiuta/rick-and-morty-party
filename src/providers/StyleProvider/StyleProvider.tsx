import React, { FC } from 'react'

import { GlobalStyles } from './GlobalStyles'

interface Props {
  children: any
}

export const StyleProvider: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
