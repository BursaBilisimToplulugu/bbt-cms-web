import { Meta, StoryObj } from '@storybook/react';
import ComingSoon from '.';

const meta: Meta<typeof ComingSoon> = {
  title: 'Catalog/Extra Pages/Coming Soon',
  component: ComingSoon
};

export default meta;

type Story = StoryObj<typeof ComingSoon>;
export const Page: Story = {
  args: {}
};
