import React from 'react'
import { render, screen } from '@testing-library/react'
import ItemRow, { ItemRowProps } from './ItemRow'
import { Image } from '@/app/useData'
import '@testing-library/jest-dom'

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt, src }: Image) => <img alt={alt} src={src} />,
}))

describe('ItemRow Component', () => {
  const itemsWithImages: ItemRowProps["items"] = [
    {
      img: { src: '/test-image1.jpg', alt: 'Test image 1' },
      heading: 'Heading 1',
      body: 'Body 1',
    },
    {
      img: { src: '/test-image2.jpg', alt: 'Test image 2' },
      heading: 'Heading 2',
      body: 'Body 2',
    },
  ]

  const itemsWithoutImages: ItemRowProps["items"] = [
    {
      heading: 'Heading 3',
      body: 'Body 3',
    },
    {
      heading: 'Heading 4',
      body: 'Body 4',
    },
  ]

  const itemsMixed: ItemRowProps["items"] = [
    {
      img: { src: '/test-image3.jpg', alt: 'Test image 3' },
      heading: 'Heading 5',
      body: 'Body 5',
    },
    {
      heading: 'Heading 6',
      body: 'Body 6',
    },
  ]

  test('renders nothing when items list is empty', () => {
    render(<ItemRow items={[]} />)
    expect(screen.queryByRole('grid')).toBeNull()
  })

  test('renders items with images', () => {
    render(<ItemRow items={itemsWithImages} />)

    const grid = screen.getByRole('grid')
    expect(grid).toBeInTheDocument()

    itemsWithImages.forEach((item, idx) => {
      const image = screen.getByAltText(`Test image ${idx + 1}`)
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', item.img?.src)

      if (item.heading) {
        expect(screen.getByText(item.heading)).toBeInTheDocument()
      }
      if (item.body) {
        expect(screen.getByText(item.body)).toBeInTheDocument()
      }
    })
  })

  test('renders items without images', () => {
    render(<ItemRow items={itemsWithoutImages} />)

    const grid = screen.getByRole('grid')
    expect(grid).toBeInTheDocument()

    itemsWithoutImages.forEach((item, idx) => {
      expect(screen.queryByAltText(`item ${idx + 1} image`)).toBeNull()

      if (item.heading) {
        expect(screen.getByText(item.heading)).toBeInTheDocument()
      }
      if (item.body) {
        expect(screen.getByText(item.body)).toBeInTheDocument()
      }
    })
  })

  test('renders items with mixed presence of images', () => {
    render(<ItemRow items={itemsMixed} />)

    const grid = screen.getByRole('grid')
    expect(grid).toBeInTheDocument()

    itemsMixed.forEach((item, idx) => {
      if (item.img) {
        const image = screen.getByAltText(item.img.alt!)
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', item.img.src)
      } else {
        expect(screen.queryByAltText(`item ${idx + 1} image`)).toBeNull()
      }

      if (item.heading) {
        expect(screen.getByText(item.heading)).toBeInTheDocument()
      }
      if (item.body) {
        expect(screen.getByText(item.body)).toBeInTheDocument()
      }
    })
  })
})
