import { ImageListItem, Stack, Typography, ImageListItemBar, Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import Carousel from 'components/common/Carousel';
import { Settings } from 'react-slick';
import { Link as RouteLink } from 'react-router-dom';

const itemData = [
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-1.webp',
    redirectTo: '/product'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-2.webp',
    redirectTo: '/product'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-3.webp',
    redirectTo: '/product'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-4.webp',
    redirectTo: '/product'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-5.webp',
    redirectTo: '/product'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/new-arrival-img-6.webp',
    redirectTo: '/product'
  }
];

interface ItemProps {
  item: {
    name: string,
    reviewStar: number,
    price: number,
    mrp: number,
    imageUrl: string,
    redirectTo: string
  };
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;
  return (
    <Link component={RouteLink} to={item.redirectTo} sx={{ textDecoration: 'none' }} color={'#000'}>
      <ImageListItem
        key={item.imageUrl}
        component="div"
        sx={{ width: { xs: '100%', paddingLeft: '15px', paddingRight: '15px' } }}
      >
        <img src={item.imageUrl} srcSet={item.imageUrl} alt={item.name} loading="lazy" />
        <ImageListItemBar
          title={<Typography sx={{ fontWeight: 500, marginTop: '10px' }}>{item.name}</Typography>}
          position="below"
        />
      </ImageListItem>
    </Link>
  );
};

const ItemCarousel: React.FC = () => {
  const carouselSetting: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      arrows: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
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

const NewArrivals: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">
          <BoltIcon color="primary" sx={{ paddingTop: 1 }} />
          New Arrivals
        </Typography>
      </Box>
      <Box>
        <ItemCarousel />
      </Box>
    </Stack>
  );
};

export default NewArrivals;
