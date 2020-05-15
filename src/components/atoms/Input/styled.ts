import styled from 'styled-components'

const Input = styled.input<{ isClearable: boolean }>`
  width: 100%;
  padding: ${({ isClearable }) => (isClearable ? '22px 70px 22px 22px' : '22px 27px')};
  font-size: 30px;
  line-height: 35px;
  font-weight: 300;
  text-transform: uppercase;
  border: 1px solid #a0a0a0;
`

const InputWrapper = styled.div`
  position: relative;
`

const CloseIconContainer = styled.div`
  display: inline-flex;
  position: absolute;
  right: 22px;
  height: 100%;
  align-items: center;
`

export const Styled = {
  Input,
  InputWrapper,
  CloseIconContainer,
}
