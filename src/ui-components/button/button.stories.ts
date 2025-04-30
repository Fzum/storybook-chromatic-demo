import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    clicked: { action: 'clicked' },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    clicked: fn(),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    clicked: fn(),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    clicked: fn(),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    clicked: fn(),
  },
};
