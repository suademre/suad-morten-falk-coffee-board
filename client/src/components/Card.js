import React from 'react'
import styled from 'styled-components/macro'

function Card({ text, author }) {
  return (
    <Wrapper>
      <p>{text}</p>
      <StyledAuthorText>{author}</StyledAuthorText>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-width: 375px;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 20px;
  @media only screen and (min-width: 375px) {
    min-width: 350px;
    margin: 5px auto;
    box-shadow: 0 3px 3px 3px black;
  }
`

const StyledAuthorText = styled.p`
  align-self: flex-end;
`

export default Card
