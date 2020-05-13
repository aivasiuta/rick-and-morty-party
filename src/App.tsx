import React, { FC } from 'react'
import { StyleProvider } from './providers/StyleProvider'
import { LayoutTemplate } from './templates/LayoutTemplate'
import { Party } from './pages/Party'


export const App: FC = (): JSX.Element => {
  return (
      <StyleProvider>
        <LayoutTemplate>
          <Party />
        </LayoutTemplate>
      </StyleProvider>
  )
}
