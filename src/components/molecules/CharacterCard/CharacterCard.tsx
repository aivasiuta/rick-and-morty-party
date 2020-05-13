import React, { FC } from 'react'

import { Styled } from './styled'
import { CloseButton } from '../../atoms/CloseButton'

interface Props {
  imageUrl: string
  name: string
}

export const CharacterCard: FC<Props> = ({ imageUrl, name }) => {
  // todo type
  const handleDelete = (e: any) => {
    e.stopPropagation()
    alert('delete card')
  }

  const handleCardClick = () => {
    alert('click on card')
  }

  return (
    <Styled.Wrapper imageUrl={imageUrl} onClick={handleCardClick}>
      <CloseButton onClick={handleDelete} />
    </Styled.Wrapper>
  )
}
