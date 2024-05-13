import type { Meta, StoryObj } from '@storybook/react'

import { NavbarElement } from './NavbarElement'

const meta: Meta<typeof NavbarElement> = {
  title: 'NavbarElement',
  component: NavbarElement,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  tags: ['autodocs']
}
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button'
  }
}

export default meta
