import type { Meta, StoryObj } from '@storybook/react'
import MediaBanner from './MediaBanner'
import { MOCK_DATA } from '@/app/useData'

const meta = {
  title: 'MediaBanner',
  component: MediaBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { ...MOCK_DATA.mediaBanner },
} satisfies Meta<typeof MediaBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
