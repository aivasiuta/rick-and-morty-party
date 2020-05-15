import styled from 'styled-components'

const backgroundMapping = {
  light: {
    regular: 'rgba(255, 255, 255, 0.75)',
    hover: 'rgba(255, 255, 255, 1)',
  },
  dark: {
    regular: 'rgba(200, 200, 200, 0.75)',
    hover: 'rgba(200, 200, 200, 1)',
  },
}

const CloseIcon = styled.button<{ colorType: CloseButtonColor }>`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${({ colorType }) => backgroundMapping[colorType].regular};
  cursor: pointer;
  transition: background-color ease-in 150ms;
  
  &:hover {
    background: ${({ colorType }) => backgroundMapping[colorType].hover};
  }
`

export const Styled = {
  CloseIcon,
}
