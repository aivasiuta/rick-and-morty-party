import React, { FC } from 'react'

import { Styled } from './styled'
import { CloseButton } from '../../atoms/CloseButton'

interface Props {
  // todo type
  character?: any
  onClick?: any
  placeholder?: string
  isCloseable?: boolean
}

export const CharacterCard: FC<Props> = ({ character, onClick, placeholder, isCloseable= false }): JSX.Element => {
  // todo type
  const handleDelete = (e: any) => {
    e.stopPropagation()
    alert('delete card')
  }

  const handleCardClick = () => {
    onClick(character)
  }

  return (
    <Styled.Wrapper imageUrl={character?.image} onClick={handleCardClick}>
      {isCloseable && (
        <Styled.CloseIconContainer>
          <CloseButton onClick={handleDelete} />
        </Styled.CloseIconContainer>
      )}
      {placeholder && !character && (
        <Styled.Placeholder>{placeholder}</Styled.Placeholder>
      )}
    </Styled.Wrapper>
  )
}
