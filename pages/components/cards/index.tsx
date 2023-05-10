import Head from 'next/head';
import SidebarLayout from '@/modules/common/layouts/SidebarLayout';
import { useState } from 'react';

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
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';

import CardMedia from '@mui/material/CardMedia';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Cards() {
  return (
    <>
      <Head>
        <title>Cards - Components</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Cards"
          subHeading="Cards contain content and actions about a single subject."
          docs="https://material-ui.com/components/cards/"
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
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Cards.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Cards;
