import type { Meta, StoryObj } from '@storybook/react'
import PrimaryButton from './PrimaryButton'

const meta = {
  title: 'PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    text: "Click me",
    href: "/",
  },
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
