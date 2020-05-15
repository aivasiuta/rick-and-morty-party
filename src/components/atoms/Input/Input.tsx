import React, { FC, useState } from 'react'

import { Styled } from './styled'
import { CloseButton } from '../CloseButton'

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  isClearable?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({ isClearable = false, onChange, ...restProps }): JSX.Element => {
  const [value, setValue] = useState('')

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event)
  }

  const handleReset = () => setValue('')

  return (
    <Styled.InputWrapper>
      <Styled.Input isClearable={isClearable} type="text" value={value} onChange={handleChangeValue} {...restProps} />
      {isClearable && value.length > 0 && (
        <Styled.CloseIconContainer>
          <CloseButton onClick={handleReset} colorType="dark" />
        </Styled.CloseIconContainer>
      )}
    </Styled.InputWrapper>
  )
}
