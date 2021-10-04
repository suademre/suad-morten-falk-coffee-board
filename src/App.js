import React, { useState } from 'react'
import Card from './components/Card'
import styled from 'styled-components/macro'
import Input from './components/Input'

function App({ data }) {
  const [cardData, setCardData] = useState(data)

  function handleCreateCard({ text, author, id }) {
    const newData = [...cardData, { id: id, text: text, author: author }]

    setCardData(newData)
    console.log(newData)
  }

  return (
    <Main>
      {cardData.map(card => (
        <Card text={card.text} author={card.author} key={card.id} />
      ))}
      <Footer>
        <Input onCreateCard={handleCreateCard} />
      </Footer>
    </Main>
  )
}

const Main = styled.main`
  height: 90vh;
  overflow: hidden;
  border: 2px solid black;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 375px) {
    flex-flow: wrap row;
  }
`
const Footer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  min-height: 20px;
`

export default App
