import React from 'react'
import Button from './Button'

function Input({ onCreateCard }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { text } = form.elements

    onCreateCard({
      text: text.value,
      author: 'Falk',
    })
    form.reset()
    text.focus()
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        <input
          type="text"
          name="text"
          placeholder="Your question here"
          role="input"
          required
          autoComplete="Off"
        />
      </label>
      <Button />
    </form>
  )
}

export default Input
