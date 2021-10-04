import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders input element', () => {
    render(<Input />)
    const inputEl = screen.getByRole('input')
    expect(inputEl).toBeInTheDocument()
  })
})
