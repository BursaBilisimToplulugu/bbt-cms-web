import { Meta } from '@storybook/react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Catalog/Tooltip',
  component: Tooltip
};

export default meta;

export const Default = () => (
  <Tooltip title="Add">
    <Button>text</Button>
  </Tooltip>
);

export const Arrow = () => (
  <Tooltip arrow title="Add">
    <Button>with arrow</Button>
  </Tooltip>
);

export const Placement = () => (
  <Tooltip title="Add" placement="left-start">
    <Button>placement</Button>
  </Tooltip>
);

export const TopStart = () => (
  <Tooltip arrow title="Add" placement="top-start">
    <Button>top-start</Button>
  </Tooltip>
);

export const Top = () => (
  <Tooltip arrow title="Add" placement="top">
    <Button>top</Button>
  </Tooltip>
);

export const TopEnd = () => (
  <Tooltip arrow title="Add" placement="top-end">
    <Button>top-end</Button>
  </Tooltip>
);

export const LeftStart = () => (
  <Tooltip arrow title="Add" placement="left-start">
    <Button>left-start</Button>
  </Tooltip>
);

export const Left = () => (
  <Tooltip arrow title="Add" placement="left">
    <Button>left</Button>
  </Tooltip>
);

export const LeftEnd = () => (
  <Tooltip arrow title="Add" placement="left-end">
    <Button>left-end</Button>
  </Tooltip>
);

export const RightStart = () => (
  <Tooltip arrow title="Add" placement="right-start">
    <Button>right-start</Button>
  </Tooltip>
);

export const Right = () => (
  <Tooltip arrow title="Add" placement="right">
    <Button>right</Button>
  </Tooltip>
);

export const RightEnd = () => (
  <Tooltip arrow title="Add" placement="right-end">
    <Button>right-end</Button>
  </Tooltip>
);

export const BottomStart = () => (
  <Tooltip arrow title="Add" placement="bottom-start">
    <Button>bottom-start</Button>
  </Tooltip>
);

export const Bottom = () => (
  <Tooltip arrow title="Add" placement="bottom">
    <Button>bottom</Button>
  </Tooltip>
);

export const BottomEnd = () => (
  <Tooltip arrow title="Add" placement="bottom-end">
    <Button>bottom-end</Button>
  </Tooltip>
);
