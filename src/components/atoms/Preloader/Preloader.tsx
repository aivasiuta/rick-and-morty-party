import React, { FC } from 'react'

import Loader from '../../../assets/loader.svg'
import { Styled } from './styled'

export const Preloader: FC = (): JSX.Element => {
  return (
    <Styled.Wrapper>
      {/* todo replace jsx */}
      <img src={Loader} alt="preloader" style={{ width: 100, height: 100 }} />
    </Styled.Wrapper>
  )
}
