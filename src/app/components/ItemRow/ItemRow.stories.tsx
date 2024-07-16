import type { Meta, StoryObj } from '@storybook/react'
import ItemRow from './ItemRow'
import imageIcon from "../../../../public/icon.png"

const meta = {
  title: 'ItemRow',
  component: ItemRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: [
      {
        iconSrc: imageIcon.src,
        iconAlt: "Icon 1",
        subheader: "Subheader 1",
        body: "Body 1",
      },
      {
        iconSrc: imageIcon.src,
        iconAlt: "Icon 2",
        subheader: "Subheader 2",
        body: "Body 2",
      },
      {
        iconSrc: imageIcon.src,
        iconAlt: "Icon 3",
        subheader: "Subheader 3",
        body: "Body 3",
      },
      {
        iconSrc: imageIcon.src,
        iconAlt: "Icon 4",
        subheader: "Subheader 4",
        body: "Body 4",
      },
    ]
  },
} satisfies Meta<typeof ItemRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
