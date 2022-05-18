import { Stack, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import Carousel from 'components/common/Carousel';
import { Settings } from 'react-slick';
import BuyNowButton from 'components/common/BuyNowButton';

const itemData = [
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/xiaomi-watch.png',
    redirectTo: '/checkout'
  }
];

interface ItemProps {
  item: {
    name: string;
    reviewStar: number;
    price: number;
    mrp: number;
    imageUrl: string;
    redirectTo: string;
  };
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;
  return (
    <Grid container sx={{ backgroundColor: '#fff', borderRadius: '10px', padding: '30px 0' }}>
      <Grid item xs={12} sm={12} md={5} lg={6}>
        <Box component={'img'} src={item.imageUrl} sx={{ margin: 'auto' }} />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={4}>
        <Stack spacing={3} sx={{ justifyContent: 'center', height: '100%' }}>
          <Box>
            <Typography variant={'h6'} color="primary" component={'h3'} sx={{ fontWeight: '500' }}>
              Deal Of The Day
            </Typography>
            <Typography
              variant={'h5'}
              component={'h2'}
              sx={{ fontWeight: '700', marginTop: '5px', marginBottom: '10px' }}
            >
              Apple Watch Series 4 (Black)
            </Typography>
            <Typography variant={'body2'} sx={{ marginTop: '10px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu,
              quam etiam at quis ut convallis.
            </Typography>
          </Box>
          <Typography component={'h4'} sx={{ fontWeight: '500' }}>
            Fresh Deal Everyday, Get It Now!
          </Typography>
          <Box>
            {/* <RouterLink to={item.redirectTo}> */}
            <BuyNowButton to={item.redirectTo} />
            {/* <Button variant="contained">BUY NOW</Button> */}
            {/* </RouterLink> */}
            {/* <Button></Button> */}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

const ItemCarousel: React.FC = () => {
  const carouselSetting: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      arrows: true,
      pauseOnHover: false
    }),
    []
  );
  return (
    <Carousel settings={carouselSetting}>
      {itemData.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

const DealOfTheDay: React.FC = () => {
  return (
    <Box>
      <ItemCarousel />
    </Box>
  );
};

export default DealOfTheDay;
