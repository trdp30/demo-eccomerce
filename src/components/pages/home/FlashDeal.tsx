import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useMemo } from 'react'
import BoltIcon from '@mui/icons-material/Bolt'
import Carousel from 'components/common/Carousel'
import { Settings } from 'react-slick'
import { useProductQuery } from 'services/productApi'
import { Product } from 'type'
import ProductCard from 'components/pages/products/ProductCard'

interface ItemProps {
  product: Product
}

const Item: React.FC<ItemProps> = (props) => {
  const { product } = props
  return (
    <Box sx={{ width: { xs: '100%', paddingLeft: '15px', paddingRight: '15px' } }}>
      <ProductCard product={product} />
    </Box>
  )
}

interface ItemCarouselProps {
  products: Product[]
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ products }) => {
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
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Carousel>
  )
}

const FlashDeal: React.FC = () => {
  const { data = [], isLoading } = useProductQuery({ page: 2, per_page: 8 })
  if (isLoading || !data) {
    return <Typography>Loading...</Typography>
  }
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">
          <BoltIcon color="primary" sx={{ paddingTop: 1 }} />
          Flash Deals
        </Typography>
      </Box>
      <Box>
        <ItemCarousel products={data} />
      </Box>
    </Stack>
  )
}

export default FlashDeal
