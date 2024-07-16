import React from 'react'
import { render, screen, within } from '@testing-library/react'
import MediaBanner, { MediaBannerProps } from './MediaBanner'
import '@testing-library/jest-dom'

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src }: NonNullable<MediaBannerProps["img"]>) => <img alt={alt} src={src} />,
}))

describe('MediaBanner Component', () => {
  const defaultProps: MediaBannerProps = {
    img: {
      src: '/test-image.jpg',
      alt: 'Test image',
      caption: 'Test caption',
    },
    leadingText: 'Test Leading Text',
    heading: 'Test Heading',
    orientation: 'right',
    button: {
      text: 'Test Button',
      href: 'https://example.com',
    },
  }

  test('renders the MediaBanner with image, leading text, heading, and button', () => {
    render(<MediaBanner {...defaultProps} />)

    const image = screen.getByAltText('Test image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')

    const caption = screen.getByText('Test caption')
    expect(caption).toBeInTheDocument()

    const leadingText = screen.getByText('Test Leading Text')
    expect(leadingText).toBeInTheDocument()

    const heading = screen.getByRole('heading', { name: 'Test Heading' })
    expect(heading).toBeInTheDocument()

    const button = screen.getByText('Test Button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', 'https://example.com')
  })

  test('renders the MediaBanner without a button if button props are not provided', () => {
    const propsWithoutButton: MediaBannerProps = {
      ...defaultProps,
      button: undefined,
    }
    render(<MediaBanner {...propsWithoutButton} />)

    const button = screen.queryByText('Test Button')
    expect(button).toBeNull()
  })

  test('does not render the MediaBanner if img prop is not provided', () => {
    const propsWithoutImage: MediaBannerProps = {
      ...defaultProps,
      img: undefined,
    }
    const { container } = render(<MediaBanner {...propsWithoutImage} />)
    expect(container.firstChild).toBeNull()
  })

  test('applies the correct orientation class based on orientation prop', () => {
    const rightRender = render(<MediaBanner {...defaultProps} />)
    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('sm:flex-row')
    rightRender.unmount()

    const propsWithLeftOrientation: MediaBannerProps = {
      ...defaultProps,
      orientation: 'left',
    }
    render(<MediaBanner {...propsWithLeftOrientation} />)
    const bannerWithLeftOrientation = screen.getByRole('banner')
    expect(bannerWithLeftOrientation).toHaveClass('sm:flex-row-reverse')
  })
})
