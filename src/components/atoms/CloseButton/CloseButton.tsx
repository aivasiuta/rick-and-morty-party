import React, { FC } from 'react'

import { Styled } from './styled'
import CrossIcon from '../../../assets/cross.svg'

interface Props {
  // todo type
  onClick: (e: any) => void
  colorType?: CloseButtonColor
}

export const CloseButton: FC<Props> = ({ onClick, colorType = 'light' }) => {
  return (
    <Styled.CloseIcon colorType={colorType}>
      <img src={CrossIcon} alt="delete" onClick={onClick} />
    </Styled.CloseIcon>
  )
}
