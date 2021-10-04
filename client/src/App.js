import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import styled from 'styled-components/macro'
import Input from './components/Input'
import getCards from './services/getcards'
import postCard from './services/postCard'

function App() {
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    getCards()
      .then(data => setCardData(data))
      .catch(error => console.error(error))
  }, [])

  function createCard(card) {
    console.log(card)
    postCard(card)
      .then(data => setCardData([...cardData, data]))
      .catch(error => console.error(error))
  }

  return (
    <Main>
      {cardData.map(card => (
        <Card text={card.text} author={card.author} key={card._id} />
      ))}
      <Footer>
        <Input onCreateCard={createCard} />
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
