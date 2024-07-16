import type { Meta, StoryObj } from '@storybook/react'
import ItemRow from './ItemRow'
import { MOCK_DATA } from '@/app/useData'

const meta = {
  title: 'ItemRow',
  component: ItemRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: MOCK_DATA.itemRow.items
  },
} satisfies Meta<typeof ItemRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
