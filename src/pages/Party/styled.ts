import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  grid-row-gap: 30px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 98px;
  margin-bottom: 20px;
`

export const Styled = {
  Wrapper,
  Title,
}
