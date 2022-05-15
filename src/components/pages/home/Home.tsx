import { Box, Container, Grid, Link, Typography, Stack } from '@mui/material';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import SectionTwo from 'components/pages/home/SectionTwo';
import FlashDeal from 'components/pages/home/FlashDeal';
import NewArrivals from 'components/pages/home/NewArrivals';
import DealOfTheWeek from 'components/pages/home/DealOfTheWeek';
import DealOfTheDay from 'components/pages/home/DealOfTheDay';
import TrendingItems from 'components/pages/home/TrendingItems';
import TagLine from 'components/pages/home/TagLine';

const Home: React.FC = () => {
  return (
    <Container sx={{ paddingTop: '30px', paddingBottom: '30px' }}>
      <Stack spacing={5}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={4}>
              <Link
                component={RouteLink}
                to="/special-offer"
                color={'#000'}
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)',
                    height: '100%',
                    transition: 'all 250ms ease-in-out'
                  }}
                >
                  <Box
                    component={'img'}
                    src="/assets/images/shoes-1.png"
                    sx={{
                      display: 'block',
                      marginRight: 'auto',
                      marginLeft: 'auto',
                      padding: '2.5rem'
                    }}
                  />
                  <Box sx={{ padding: '24px' }}>
                    <Box
                      component={'p'}
                      sx={{
                        marginBottom: '0.5rem',
                        marginTop: 0,
                        fontSize: 14,
                        color: '#7D879C',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      SPECIAL OFFER
                    </Box>
                    <Typography
                      component="h1"
                      sx={{
                        marginBottom: 0,
                        marginTop: 0,
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      <Box
                        component={'span'}
                        sx={{
                          lineHeight: '1.3',
                          textTransform: 'none',
                          whiteSpace: 'normal',
                          color: 'primary.main'
                        }}
                      >
                        Comfortable
                      </Box>{' '}
                      Original
                      <br /> Cotton Sneaker
                    </Typography>
                    <Box
                      component={'p'}
                      sx={{
                        marginBottom: '1rem',
                        marginTop: '0.5rem',
                        fontSize: 14,
                        color: '#7D879C',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      Handcrafted from genuine Italian leather. One inner compartment with black
                      lining
                    </Box>
                    <Box
                      component={'small'}
                      sx={{
                        fontSize: 12,
                        lineHeight: '1.5',
                        fontWeight: '900',
                        borderBottom: '2px solid',
                        borderColor: 'primary.main',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      SHOP NOW
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
              <Link
                component={RouteLink}
                to="/jackets"
                sx={{ textDecoration: 'none' }}
                color={'#000'}
              >
                <Grid
                  container
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: 1,
                    boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)'
                  }}
                >
                  <Grid item xs={12} sm={7} sx={{ padding: '30px' }}>
                    <Typography variant="overline">JACKETS</Typography>
                    <Typography
                      component="h1"
                      sx={{
                        marginBottom: 0,
                        marginTop: 0,
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      <Box
                        component={'span'}
                        sx={{
                          lineHeight: '1.3',
                          textTransform: 'none',
                          whiteSpace: 'normal',
                          color: 'primary.main'
                        }}
                      >
                        Minimalist
                      </Box>{' '}
                      Genuine
                      <br /> Cotton Jacket
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#7D879C',
                        marginBottom: '1rem',
                        marginTop: '0.5rem',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      Handcrafted from genuine Italian leather. One inner compartment with black
                      satin lining
                    </Typography>
                    <Typography
                      component={'small'}
                      sx={{
                        fontSize: 12,
                        lineHeight: '1.5',
                        fontWeight: '900',
                        borderBottom: '2px solid',
                        borderColor: 'primary.main',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      SHOP NOW
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Box
                      component={'img'}
                      src="/assets/images/jacket.png"
                      sx={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: '100%',
                        maxHeight: '225px'
                      }}
                    />
                  </Grid>
                </Grid>
              </Link>
              <Box sx={{ marginTop: '1.5rem' }} />
              <Link
                component={RouteLink}
                to="/jackets"
                color={'#000'}
                sx={{ textDecoration: 'none' }}
              >
                <Grid
                  container
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: 1,
                    boxShadow: '0px 0px 28px rgb(3 0 71 / 1%)'
                  }}
                >
                  <Grid item xs={12} sm={6}>
                    <Box
                      component={'img'}
                      src="/assets/images/t-shirt2.png"
                      sx={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: '100%',
                        maxHeight: '225px'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="overline">MEN&apos;S SHOE</Typography>
                    <Typography
                      component="h1"
                      sx={{
                        marginBottom: 0,
                        marginTop: 0,
                        fontSize: '30px',
                        fontWeight: '700',
                        lineHeight: '1.3',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      <Box
                        component={'span'}
                        sx={{
                          lineHeight: '1.3',
                          textTransform: 'none',
                          whiteSpace: 'normal',
                          color: 'primary.main'
                        }}
                      >
                        Stylish
                      </Box>{' '}
                      Genuine
                      <br /> Comfy T-shirts
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#7D879C',
                        marginBottom: '1rem',
                        marginTop: '0.5rem',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      Handcrafted from genuine Italian leather. One inner compartment with black
                      satin lining
                    </Typography>
                    <Typography
                      component={'small'}
                      sx={{
                        fontSize: 12,
                        lineHeight: '1.5',
                        fontWeight: '900',
                        borderBottom: '2px solid',
                        borderColor: 'primary',
                        textTransform: 'none',
                        whiteSpace: 'normal'
                      }}
                    >
                      SHOP NOW
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <SectionTwo />
        </Box>
        <Box>
          <FlashDeal />
        </Box>
        <Box>
          <NewArrivals />
        </Box>
        <Box>
          <DealOfTheWeek />
        </Box>
        <Box>
          <DealOfTheDay />
        </Box>
        <Box>
          <TrendingItems />
        </Box>
        <Box>
          <TagLine />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
