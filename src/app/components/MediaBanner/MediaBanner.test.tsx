import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'
import MediaBanner, { MediaBannerProps } from "./MediaBanner"

describe("MediaBanner Component", () => {
  const mockCtaOnClick = jest.fn()

  const imageProps: MediaBannerProps = {
    mediaSrc: "/test-image.png",
    mediaType: "image",
    subheader: "Test Subheader",
    header: "Test Header",
    ctaText: "Click Me",
    ctaOnClick: mockCtaOnClick,
  }

  const videoProps: MediaBannerProps = {
    mediaSrc: "/test-video.mp4",
    mediaType: "video",
    subheader: "Test Subheader",
    header: "Test Header",
    ctaText: "Click Me",
    ctaOnClick: mockCtaOnClick,
  }

  test("renders the MediaBanner with image", () => {
    render(<MediaBanner {...imageProps} />)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByAltText("banner image")).toBeInTheDocument()
    expect(screen.getByText(imageProps.subheader)).toBeInTheDocument()
    expect(screen.getByText(imageProps.header)).toBeInTheDocument()
    expect(screen.getByText(imageProps.ctaText)).toBeInTheDocument()
  })

  test("renders the MediaBanner with video", () => {
    render(<MediaBanner {...videoProps} />)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("video")).toBeInTheDocument()
    expect(screen.getByText("Your browser doesn't support HTML video.")).toBeInTheDocument()
    expect(screen.getByText(videoProps.subheader)).toBeInTheDocument()
    expect(screen.getByText(videoProps.header)).toBeInTheDocument()
    expect(screen.getByText(videoProps.ctaText)).toBeInTheDocument()
  })

  test("calls the CTA onClick handler when button is clicked", () => {
    render(<MediaBanner {...imageProps} />)

    const ctaButton = screen.getByText(imageProps.ctaText)
    fireEvent.click(ctaButton)

    expect(mockCtaOnClick).toHaveBeenCalledTimes(1)
  })
})
