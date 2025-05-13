import type {Meta, StoryObj} from '@storybook/angular';

import {BadgeComponent} from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'UI/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Badge variant style',
      table: {
        defaultValue: {summary: 'default'},
      }
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Badge size',
      table: {
        defaultValue: {summary: 'medium'},
      }
    },
    label: {
      control: 'text',
      description: 'Badge text content',
      table: {
        defaultValue: {summary: 'Badge'},
      }
    }
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    label: 'Info',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const CustomColor: Story = {
  args: {
    backgroundColor: '#9333EA',
    label: 'Custom',
  },
};

export const PinkBadge: Story = {
  args: {
    variant: "default",
    label: "Pink Badge",
    backgroundColor: "#ef009e",
    size: "large"
  }
};
