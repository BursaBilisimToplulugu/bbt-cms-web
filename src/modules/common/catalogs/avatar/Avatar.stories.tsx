import { Meta } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { deepPurple, blue } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';

const meta: Meta<typeof Avatar> = {
  title: 'Catalog/Avatar',
  component: Avatar
};

export default meta;

export const Source = () => (
  <Avatar alt="Remy Sharp" src="/static/images/avatars/1.jpg" />
);

export const Text = () => <Avatar sx={{ color: '#555555' }}>Text</Avatar>;

export const Variant = () => (
  <Avatar sx={{ color: '#555555' }} variant="square">
    Text
  </Avatar>
);

export const BackgroundColor = () => (
  <Avatar sx={{ bgcolor: deepPurple[500] }}>Text</Avatar>
);

export const FunctionAsProps = () => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    };
  }

  return <Avatar {...stringAvatar('Kent Dodds')} />;
};

export const Size = () => (
  <Avatar
    alt="Remy Sharp"
    src="/static/images/avatars/4.jpg"
    sx={{ width: 24, height: 24 }}
  />
);

export const Icon = () => (
  <Avatar sx={{ bgcolor: blue[500] }}>
    <FolderIcon />
  </Avatar>
);
