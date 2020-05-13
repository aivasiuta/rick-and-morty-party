import styled from 'styled-components'

const Wrapper = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 180px;
  height: 220px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

export const Styled = {
  Wrapper,
}
