import React from 'react'
import Card from './components/Card'
import styled from 'styled-components'

function App({ data }) {
  return (
    <StyledContainer>
      {data.map(card => (
        <Card text={card.text} author={card.author} key={card.id} />
      ))}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  height: 100%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 375px) {
    flex-flow: wrap row;
  }
`

export default App
