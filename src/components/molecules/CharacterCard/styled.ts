import styled from 'styled-components'

const Wrapper = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 180px;
  height: 220px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-color: #DADADA;
  cursor: pointer;
`

const CloseIconContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  display: inline-block;
`

export const Styled = {
  Wrapper,
  CloseIconContainer,
}
