import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 98px;
`

const CardsWrapper = styled.div`
  display: grid;
  width: 390px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  margin: auto;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`

export const Styled = {
  Wrapper,
  CardsWrapper,
  Title,
}
