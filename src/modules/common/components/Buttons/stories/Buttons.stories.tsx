import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Meta } from '@storybook/react';
import PageTitleWrapper from '../../PageTitleWrapper';
import PageTitle from '../../PageTitle';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  args: {
    children: 'Button',
    className: 'font-bold'
  }
};

export default meta;
// type Story = StoryObj<typeof Button>;

export const Default = () => {
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading="Buttons"
          subHeading="Buttons allow users to take actions, and make choices, with a single tap."
          docs="https://material-ui.com/components/buttons/"
        />
      </PageTitleWrapper>
      <Card>
        <CardHeader title="Contained Buttons" />
        <Divider />
        <CardContent>
          <Button sx={{ margin: 1 }} variant="contained">
            Default
          </Button>
          <Button sx={{ margin: 1 }} variant="contained" color="primary">
            Primary
          </Button>
          <Button sx={{ margin: 1 }} variant="contained" color="secondary">
            Secondary
          </Button>
          <Button sx={{ margin: 1 }} variant="contained" disabled>
            Disabled
          </Button>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Link
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Text Buttons" />
        <Divider />
        <CardContent>
          <Button sx={{ margin: 1 }}>Default</Button>
          <Button sx={{ margin: 1 }} color="primary">
            Primary
          </Button>
          <Button sx={{ margin: 1 }} color="secondary">
            Secondary
          </Button>
          <Button sx={{ margin: 1 }} disabled>
            Disabled
          </Button>
          <Button sx={{ margin: 1 }} href="#text-buttons" color="primary">
            Link
          </Button>
        </CardContent>
      </Card>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Outlined Buttons" />
          <Divider />
          <CardContent>
            <Button variant="outlined" sx={{ margin: 1 }}>
              Default
            </Button>
            <Button variant="outlined" sx={{ margin: 1 }} color="primary">
              Primary
            </Button>
            <Button variant="outlined" sx={{ margin: 1 }} color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" sx={{ margin: 1 }} disabled>
              Disabled
            </Button>
            <Button
              variant="outlined"
              sx={{ margin: 1 }}
              color="primary"
              href="#outlined-buttons"
            >
              Link
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Sizes" />
          <Divider />
          <CardContent>
            <div>
              <div>
                <Button size="small" sx={{ margin: 1 }}>
                  Small
                </Button>
                <Button size="medium" sx={{ margin: 1 }}>
                  Medium
                </Button>
                <Button size="large" sx={{ margin: 1 }}>
                  Large
                </Button>
              </div>
              <div>
                <Button
                  variant="outlined"
                  sx={{ margin: 1 }}
                  size="small"
                  color="primary"
                >
                  Small
                </Button>
                <Button
                  variant="outlined"
                  sx={{ margin: 1 }}
                  size="medium"
                  color="primary"
                >
                  Medium
                </Button>
                <Button
                  variant="outlined"
                  sx={{ margin: 1 }}
                  size="large"
                  color="primary"
                >
                  Large
                </Button>
              </div>
              <div>
                <Button
                  sx={{ margin: 1 }}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Small
                </Button>
                <Button
                  sx={{ margin: 1 }}
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  Medium
                </Button>
                <Button
                  sx={{ margin: 1 }}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Large
                </Button>
              </div>
              <div>
                <IconButton aria-label="delete" sx={{ margin: 1 }} size="small">
                  <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" sx={{ margin: 1 }}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" sx={{ margin: 1 }}>
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" sx={{ margin: 1 }}>
                  <DeleteIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
