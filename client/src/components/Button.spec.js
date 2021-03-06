import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders Button', () => {
    render(<Button />)

    const buttonEl = screen.getByRole('button')
    expect(buttonEl).toBeInTheDocument()
  })
})
