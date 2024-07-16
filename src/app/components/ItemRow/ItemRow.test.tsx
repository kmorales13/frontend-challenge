import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import ItemRow, { ItemRowProps } from "./ItemRow"

describe("ItemRow Component", () => {
  const itemsWithIcons: ItemRowProps["items"] = [
    {
      iconSrc: "/icon1.png",
      iconAlt: "Icon 1",
      subheader: "Subheader 1",
      body: "Body 1",
    },
    {
      iconSrc: "/icon2.png",
      iconAlt: "Icon 2",
      subheader: "Subheader 2",
      body: "Body 2",
    },
  ]

  const itemsWithoutIcons: ItemRowProps["items"] = [
    {
      subheader: "Subheader 3",
      body: "Body 3",
    },
    {
      subheader: "Subheader 4",
      body: "Body 4",
    },
  ]

  test("renders nothing when items list is empty", () => {
    render(<ItemRow items={[]} />)
    expect(screen.queryByRole("grid")).toBeNull()
  })

  test("renders items with icons", () => {
    render(<ItemRow items={itemsWithIcons} />)

    const grid = screen.getByRole("grid")
    expect(grid).toBeInTheDocument()

    itemsWithIcons.forEach((item, idx) => {
      const icon = screen.getByAltText(`item icon ${idx + 1}`)
      expect(icon).toBeInTheDocument()
      if (item.subheader)
        expect(screen.getByText(item.subheader)).toBeInTheDocument()
      expect(screen.getByText(item.body)).toBeInTheDocument()
    })
  })

  test("renders items without icons", () => {
    render(<ItemRow items={itemsWithoutIcons} />)

    const grid = screen.getByRole("grid")
    expect(grid).toBeInTheDocument()

    itemsWithoutIcons.forEach((item, idx) => {
      expect(screen.queryByAltText(`item icon ${idx + 1}`)).toBeNull()
      if (item.subheader)
        expect(screen.getByText(item.subheader)).toBeInTheDocument()
      expect(screen.getByText(item.body)).toBeInTheDocument()
    })
  })
})
