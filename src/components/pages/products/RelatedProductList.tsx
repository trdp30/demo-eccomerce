import React, { useMemo } from 'react'
import ProductCard from 'components/pages/products/ProductCard'
import faker from '@faker-js/faker'
import { fill } from 'lodash'
import { Stack, Box, Typography, Grid } from '@mui/material'
import { OrganizationProductType } from 'services/productApi'

const RelatedProductList: React.FC = () => {
  const products: OrganizationProductType[] = useMemo(
    () =>
      fill(Array(4), {
        image_url: faker.image.unsplash.objects(), // faker.image.business(340, 340, false),
        price: faker.commerce.price(),
        mrp: faker.commerce.price(),
        name: faker.commerce.productName(),
        rating: 4
      }).map((a, i) => ({ id: String(i + 1), ...a })),
    []
  )

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">Related Products</Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {products.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}

export default RelatedProductList
