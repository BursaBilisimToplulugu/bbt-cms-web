import { Meta } from '@storybook/react';
import Badge from '@mui/material/Badge';
import { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Stack,
  Switch
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const meta: Meta<typeof Badge> = {
  title: 'Common/Badge',
  component: Badge,
  args: {
    children: 'Badges',
    className: 'font-bold'
  }
};
export default meta;

export const Shapes = () => {
  return (
    <>
      <Card>
        <CardHeader title="Shapes" />
        <Divider />
        <CardContent>
          <Stack spacing={3} direction="row">
            <Badge color="secondary" badgeContent=" ">
              {rectangle}
            </Badge>
            <Badge color="secondary" badgeContent=" " variant="dot">
              {rectangle}
            </Badge>
            <Badge color="secondary" overlap="circular" badgeContent=" ">
              {circle}
            </Badge>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              {circle}
            </Badge>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export const Visible = () => {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);
  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <Card>
      <CardHeader title="Badges Visibility" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
              marginBottom: 2
            },
            '& .MuiBadge-root': {
              marginRight: 4
            }
          }}
        >
          <div>
            <Badge color="secondary" badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Badge color="secondary" variant="dot" invisible={invisible}>
              <MailIcon />
            </Badge>
            <FormControlLabel
              sx={{ color: 'text.primary' }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
              label="Show Badge"
            />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export const Color = () => {
  return (
    <Card>
      <CardHeader title="Colors" />
      <Divider />
      <CardContent>
        <Stack spacing={2} direction="row">
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </CardContent>
    </Card>
  );
};
