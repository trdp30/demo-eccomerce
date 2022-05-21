import { Box, ButtonGroup, Container, Grid, Rating, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import faker from '@faker-js/faker'
import AvailableOffer from 'components/pages/products/AvailableOffer'
import ProductImagesGroup from 'components/pages/products/ProductImagesGroup'
import ProductDescriptionTab from 'components/pages/products/ProductDescriptionTab'
import RelatedProductList from 'components/pages/products/RelatedProductList'
import BuyNowButton from 'components/common/BuyNowButton'
import AddToCartButton from 'components/common/AddToCartButton'
import { OrganizationProductType } from 'services/productApi'

const ProductDetails: React.FC = () => {
  const product: OrganizationProductType = useMemo(
    () => ({
      id: '1',
      image_url: faker.image.business(340, 340, false),
      price: faker.commerce.price(),
      mrp: faker.commerce.price(),
      name: faker.commerce.productName(),
      rating: 4
    }),
    []
  )
  return (
    <Container sx={{ paddingTop: '30px', paddingBottom: '30px' }}>
      <Stack spacing={4}>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Box textAlign={'center'}>
                  <Box component={'img'} src={product.image_url} />
                </Box>
                <Box>
                  <ProductImagesGroup />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="h5" component={'h1'} fontWeight={700}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" fontWeight={400}>
                    Brand: <b>Samsung</b>
                  </Typography>
                  <Rating
                    size="small"
                    name="product-rating"
                    value={product.rating}
                    readOnly={true}
                  />
                </Box>
                <Box>
                  <AvailableOffer />
                </Box>
                <Box>
                  <Typography component={'h2'} color={'primary'} variant="h5" fontWeight={700}>
                    Rs: {product.price}{' '}
                    <Typography sx={{ color: 'gray' }} component={'del'} variant="h5">
                      {product.mrp}
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
          <ProductDescriptionTab />
        </Box>
        <Box>
          <RelatedProductList />
        </Box>
      </Stack>
    </Container>
  )
}

export default ProductDetails
