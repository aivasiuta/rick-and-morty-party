import React, { FC } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { CloseButton } from '../../atoms/CloseButton'
import { ADD_EXCLUDED_CHARACTER, ADD_RICK_IMAGE, ADD_MORTY_IMAGE } from '../../../apollo/mutations'
import { Character } from '../../../models/Character'
import { Styled } from './styled'

interface Props {
  character: Character
}

export const CharacterCard: FC<Props> = ({ character }): JSX.Element => {
  const { id, image, name } = character
  const [ addExcluded ] = useMutation(ADD_EXCLUDED_CHARACTER, { variables: { id } })
  const [ addRickImage ] = useMutation(ADD_RICK_IMAGE, { variables: { image } })
  const [ addMortyImage ] = useMutation(ADD_MORTY_IMAGE, { variables: { image } })

  const handleDelete: React.ReactEventHandler<HTMLButtonElement> = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    await addExcluded()
  }

  const handleCardClick: React.ReactEventHandler<HTMLDivElement> = async () => {
    const n = name.toLowerCase()
    if (n.indexOf('morty') > -1) {
      await addMortyImage()
    }
    if (n.indexOf('rick') > -1) {
      await addRickImage()
    }
  }

  return (
    <Styled.Wrapper imageUrl={image} onClick={handleCardClick}>
      <Styled.CloseIconContainer>
        <CloseButton onClick={handleDelete} />
      </Styled.CloseIconContainer>
    </Styled.Wrapper>
  )
}
