import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import PrimaryButton from "./PrimaryButton"

describe("PrimaryButton Component", () => {
  test("renders button with correct text and href", () => {
    const buttonText = 'Click Me'
    const buttonHref = 'https://example.com'

    render(<PrimaryButton text={buttonText} href={buttonHref} />)

    const linkElement = screen.getByRole('link', { name: buttonText })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', buttonHref)
  })
})
