import { Meta, StoryObj } from '@storybook/react';
import Text from '@/common/components/Text';

const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  args: {
    children: 'Text',
    className: 'font-bold'
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    color: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    color: 'secondary'
  }
};

export const Success: Story = {
  args: {
    color: 'success'
  }
};

export const Warning: Story = {
  args: {
    color: 'warning'
  }
};

export const Error: Story = {
  args: {
    color: 'error'
  }
};

export const Info: Story = {
  args: {
    color: 'info'
  }
};

export const Black: Story = {
  args: {
    color: 'black'
  }
};
