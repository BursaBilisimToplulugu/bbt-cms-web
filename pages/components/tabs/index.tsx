import Head from 'next/head';
import SidebarLayout from '@/modules/common/layouts/SidebarLayout';
import PageTitle from '@/modules/common/components/PageTitle';
import PageTitleWrapper from '@/modules/common/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from '@/modules/common/components/Footer';

function TabsDemo() {
  return (
    <>
      <Head>
        <title>Tabs - Components</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Tabs"
          subHeading="Tabs make it easy to explore and switch between different views."
          docs="https://material-ui.com/components/tabs/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Basic Example" />
              <Divider />
              <CardContent>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

TabsDemo.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TabsDemo;
