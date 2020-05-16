import React, { FC } from 'react'

import { ReactComponent as Loader } from '../../../assets/loader.svg'
import { Styled } from './styled'

export const Preloader: FC = (): JSX.Element => {
  return (
    <Styled.Wrapper>
      <Loader style={{ width: 50, height: 50 }} />
    </Styled.Wrapper>
  )
}
