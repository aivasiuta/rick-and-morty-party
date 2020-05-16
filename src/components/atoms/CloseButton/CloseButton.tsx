import React, { FC } from 'react'

import { ReactComponent as CrossIcon } from '../../../assets/cross.svg'
import { Styled } from './styled'

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  colorType?: CloseButtonColor
}

export const CloseButton: FC<Props> = ({ onClick, colorType = 'light' }): JSX.Element => {
  return (
    <Styled.CloseIcon colorType={colorType} onClick={onClick}>
      <CrossIcon />
    </Styled.CloseIcon>
  )
}
