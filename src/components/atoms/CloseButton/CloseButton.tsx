import React, { FC } from 'react'

import { Styled } from './styled'
import CrossIcon from '../../../assets/cross.svg'

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  colorType?: CloseButtonColor
}

export const CloseButton: FC<Props> = ({ onClick, colorType = 'light' }): JSX.Element => {
  return (
    <Styled.CloseIcon colorType={colorType} onClick={onClick}>
      <img src={CrossIcon} alt="delete" />
    </Styled.CloseIcon>
  )
}
