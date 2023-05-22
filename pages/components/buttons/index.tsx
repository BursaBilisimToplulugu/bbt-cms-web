import Head from 'next/head';
import SidebarLayout from '@/modules/common/layouts/SidebarLayout';
import PageTitle from '@/modules/common/components/PageTitle';
import PageTitleWrapper from '@/modules/common/components/PageTitleWrapper';
import {
  Button,
  Container,
  IconButton,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from '@/modules/common/components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Buttons() {
  return (
    <>
      <Head>
        <title>Buttons - Components</title>
      </Head>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Buttons.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Buttons;
