import Head from 'next/head';
import SidebarLayout from '@/modules/common/layouts/SidebarLayout';
import PageHeader from '@/modules/common/content/Management/Transactions/PageHeader';
import PageTitleWrapper from '@/modules/common/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/modules/common/components/Footer';

import RecentOrders from '@/modules/common/content/Management/Transactions/RecentOrders';

function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>Transactions - Applications</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
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
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;
