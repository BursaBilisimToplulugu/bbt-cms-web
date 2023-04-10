import { Meta, StoryObj } from '@storybook/react';
import ApplicationsMessenger from '.';

const meta: Meta<typeof ApplicationsMessenger> = {
  title: 'Catalog/Messenger',
  component: ApplicationsMessenger
};
export default meta;

type Story = StoryObj<typeof ApplicationsMessenger>;
export const Page: Story = {
  args: {}
};
