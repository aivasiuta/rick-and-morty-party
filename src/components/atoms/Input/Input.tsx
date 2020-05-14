import React, { FC } from 'react'

import { Styled } from './styled'
import { CloseButton } from '../CloseButton'

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  isClearable?: boolean
  // todo type
  onReset?: any
  value: string
}

export const Input: FC<Props> = ({
  isClearable = false,
  onReset,
  value,
  ...restProps
}): JSX.Element => {
  return (
    <Styled.InputWrapper>
      <Styled.Input isClearable={isClearable} type="text" value={value} {...restProps} />
      {isClearable && value.length > 0 && (
        <Styled.CloseIconContainer>
          <CloseButton onClick={onReset} colorType="dark"/>
        </Styled.CloseIconContainer>
      )}
    </Styled.InputWrapper>
  )
}
