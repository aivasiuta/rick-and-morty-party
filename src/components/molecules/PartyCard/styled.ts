import styled from 'styled-components'

const Wrapper = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 180px;
  height: 220px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-color: #dadada;
`

const Placeholder = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  bottom: 20px;
  left: 0;
  color: white;
`

export const Styled = {
  Wrapper,
  Placeholder,
}
