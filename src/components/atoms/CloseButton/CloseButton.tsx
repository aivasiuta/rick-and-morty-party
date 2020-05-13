import React, { FC } from 'react'

import { Styled } from './styled'
import CrossIcon from '../../../assets/cross.svg'

interface Props {
  // todo type
  onClick: (e: any) => void
}

export const CloseButton: FC<Props> = ({ onClick }) => {
  return (
      <Styled.CloseIcon>
        <img src={CrossIcon} alt="delete" onClick={onClick} />
      </Styled.CloseIcon>
  )
}
