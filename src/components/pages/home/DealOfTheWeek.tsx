import { Stack, Typography, Link } from '@mui/material'
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
    image_url: '/assets/images/deal-of-the-week-img-1.webp',
    redirectTo: '/product/1'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/deal-of-the-week-img-2.webp',
    redirectTo: '/product/2'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/deal-of-the-week-img-3.webp',
    redirectTo: '/product/3'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/deal-of-the-week-img-4.webp',
    redirectTo: '/product/4'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/deal-of-the-week-img-3.webp',
    redirectTo: '/product/5'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    image_url: '/assets/images/deal-of-the-week-img-4.webp',
    redirectTo: '/product/6'
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
      <Box
        key={item.image_url}
        component="div"
        sx={{
          width: { xs: '100%', paddingLeft: '15px', paddingRight: '15px' }
        }}
      >
        <Box
          component={'img'}
          src={item.image_url}
          srcSet={item.image_url}
          alt={item.name}
          loading="lazy"
          sx={{ width: '100%', height: '212px', borderRadius: '10px' }}
        />
        <Typography sx={{ fontWeight: 500, margin: '10px' }}>{item.name}</Typography>
      </Box>
    </Link>
  )
}

const ItemCarousel: React.FC = () => {
  const carouselSetting: Settings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      pauseOnHover: false,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 1
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

const DealOfTheWeek: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">
          <BoltIcon color="primary" sx={{ paddingTop: 1 }} />
          Deal Of The Week
        </Typography>
      </Box>
      <Box>
        <ItemCarousel />
      </Box>
    </Stack>
  )
}

export default DealOfTheWeek
