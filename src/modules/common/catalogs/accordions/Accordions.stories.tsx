import { Meta, StoryObj } from '@storybook/react';
import Accordions from '.';

const meta: Meta<typeof Accordions> = {
  title: 'Catalog/Accordions',
  component: Accordions
};
export default meta;

type Story = StoryObj<typeof Accordions>;
export const Page: Story = {
  args: {}
};
