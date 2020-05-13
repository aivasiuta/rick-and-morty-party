import styled from 'styled-components'

const CloseIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  right: 8px;
  top: 8px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: background-color ease-in 150ms;
  
  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`

export const Styled = {
  CloseIcon,
}
