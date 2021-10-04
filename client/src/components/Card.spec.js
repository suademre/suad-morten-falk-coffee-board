import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  const text = 'What is Node?'
  const author = 'Falk'

  it('renders card elements', () => {
    render(<Card author={author} text={text} />)

    const cardText = screen.getByText(text)
    const cardAuthor = screen.getByText(author)
    expect(cardAuthor).toBeInTheDocument()
    expect(cardText).toBeInTheDocument()
  })
})
