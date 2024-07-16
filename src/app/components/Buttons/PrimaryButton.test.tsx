import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PrimaryButton from './PrimaryButton'

describe('PrimaryButton Component', () => {
  test('renders button with correct text', () => {
    const buttonText = 'Click me'
    render(<PrimaryButton text={buttonText} onClick={() => {}} />)

    const buttonElement = screen.getByText(buttonText)
    expect(buttonElement).toBeInTheDocument()
  })

  test('executes onClick function when clicked', () => {
    const handleClick = jest.fn()
    render(<PrimaryButton text="Click me" onClick={handleClick} />)

    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
