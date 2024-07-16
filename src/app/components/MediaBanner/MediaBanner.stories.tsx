import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MediaBanner from './MediaBanner';
import imageBanner from "../../../../public/banner.png"

const meta = {
  title: 'MediaBanner',
  component: MediaBanner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    mediaSrc: imageBanner.src,
    mediaType: "image",
    subheader: "Test Subheader",
    header: "Test Header",
    ctaText: "Click Me",
    ctaOnClick: fn(),
  },
} satisfies Meta<typeof MediaBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
