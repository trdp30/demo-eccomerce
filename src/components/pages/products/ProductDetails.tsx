import { Box, ButtonGroup, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import AvailableOffer from 'components/pages/products/AvailableOffer'
import ProductImagesGroup from 'components/pages/products/ProductImagesGroup'
import ProductDescriptionTab from 'components/pages/products/ProductDescriptionTab'
import RelatedProductList from 'components/pages/products/RelatedProductList'
import BuyNowButton from 'components/common/BuyNowButton'
import AddToCartButton from 'components/common/AddToCartButton'
import { useGetProductByIdQuery } from 'services/productApi'
import { useParams } from 'react-router-dom'

const productDefaultValues = {
  images: [''],
  price: 0,
  mrp: 0,
  title: '',
  review_ratings: 0,
  review_count: 0,
  available: true,
  description: '',
  product_type: ''
}

const ProductDetails: React.FC = () => {
  const { product_id } = useParams()
  const {
    data: product = {
      id: Number(product_id),
      ...productDefaultValues
    },
    isLoading
  } = useGetProductByIdQuery(Number(product_id))
  if (!product || isLoading) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Container sx={{ paddingTop: '30px', paddingBottom: '30px' }}>
      <Stack spacing={4}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
                <Box textAlign={'center'} sx={{ width: '100%', height: 'calc(100% - 40px)' }}>
                  <Box
                    component={'img'}
                    src={product.images[0]}
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <ProductImagesGroup images={product.images} />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" component={'h1'} fontWeight={700}>
                    {product?.title}
                  </Typography>
                  {/* <Typography variant="body1" fontWeight={400}>
                    Brand: <b>Samsung</b>
                  </Typography> */}
                  <Rating
                    size="small"
                    name="product-rating"
                    value={product?.review_ratings}
                    readOnly={true}
                  />
                </Box>
                <Box>
                  <AvailableOffer />
                </Box>
                <Box>
                  <Typography component={'h2'} color={'primary'} variant="h5" fontWeight={700}>
                    Rs: {product?.price}{' '}
                    <Typography sx={{ color: 'gray' }} component={'del'} variant="h5">
                      {product?.mrp}
                    </Typography>
                  </Typography>
                  <Typography variant={'caption'}>Stock Available</Typography>
                </Box>
                <Box>
                  <ButtonGroup>
                    <BuyNowButton to="/checkout" />
                    <AddToCartButton />
                  </ButtonGroup>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <ProductDescriptionTab product={product} />
        </Box>
        <Box>
          <RelatedProductList />
        </Box>
      </Stack>
    </Container>
  )
}

export default ProductDetails
