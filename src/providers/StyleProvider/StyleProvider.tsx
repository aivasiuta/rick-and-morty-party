import React from 'react'
// @ts-ignore
import Normalize from 'react-normalize'

import { GlobalStyles } from './GlobalStyles'

// todo type
// @ts-ignore
export const StyleProvider = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      {children}
    </>
  )
}
