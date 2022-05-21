import { ImageListItem, Stack, Typography, ImageListItemBar, Rating, Link } from '@mui/material'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import BoltIcon from '@mui/icons-material/Bolt'
import Carousel from 'components/common/Carousel'
import { Settings } from 'react-slick'
import { Link as RouteLink } from 'react-router-dom'

const itemData = [
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/flash-deal-img-1.webp',
    redirectTo: '/product/1'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/flash-deal-img-2.webp',
    redirectTo: '/product/2'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/flash-deal-img-3.webp',
    redirectTo: '/product/3'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/flash-deal-img-4.webp',
    redirectTo: '/product/4'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/flash-deal-img-3.webp',
    redirectTo: '/product/5'
  }
]

interface ItemProps {
  item: {
    name: string
    reviewStar: number
    price: number
    mrp: number
    image_url: string
    redirectTo: string
  }
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props
  return (
    <Link component={RouteLink} to={item.redirectTo} sx={{ textDecoration: 'none' }} color={'#000'}>
      <ImageListItem
        key={item.image_url}
        component="div"
        sx={{ width: { xs: '100%', paddingLeft: '15px', paddingRight: '15px' } }}
      >
        <img src={item.image_url} srcSet={item.image_url} alt={item.name} loading="lazy" />
        <ImageListItemBar
          title={<Typography sx={{ fontWeight: 500, marginTop: '10px' }}>{item.name}</Typography>}
          subtitle={
            <Box>
              <Box sx={{ marginTop: '5px', marginBottom: '5px' }}>
                <Rating
                  size="small"
                  name="product-rating"
                  value={item.reviewStar}
                  readOnly={true}
                />
              </Box>
              <Typography color={'primary'}>
                Rs: {item.price}{' '}
                <Typography sx={{ color: 'gray' }} component={'del'}>
                  {item.mrp}
                </Typography>
              </Typography>
            </Box>
          }
          position="below"
        />
      </ImageListItem>
    </Link>
  )
}

const ItemCarousel: React.FC = () => {
  const carouselSetting: Settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }),
    []
  )
  return (
    <Carousel settings={carouselSetting}>
      {itemData.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  )
}

const FlashDeal: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">
          <BoltIcon color="primary" sx={{ paddingTop: 1 }} />
          Flash Deals
        </Typography>
      </Box>
      <Box>
        <ItemCarousel />
      </Box>
    </Stack>
  )
}

export default FlashDeal
