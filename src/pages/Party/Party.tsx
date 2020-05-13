import React, { FC } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import { Preloader } from '../../components/atoms/Preloader'
import { ErrorState } from '../../components/atoms/ErrorState'
import { CharactersList } from '../../components/organisms/CharactersList'
import { Input } from '../../components/atoms/Input'
import { Styled } from './styled'

const GET_CHARACTERS = gql`
    {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export const Party: FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <Preloader />;
  if (error) return <ErrorState>`Error! ${error.message}`</ErrorState>;

  return (
    <Styled.Wrapper>
      <Input />
      <CharactersList characters={data.characters.results} />
    </Styled.Wrapper>
  )
}
