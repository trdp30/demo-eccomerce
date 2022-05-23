import React, { useMemo } from 'react'
import ProductCard from 'components/pages/products/ProductCard'
import faker from '@faker-js/faker'
import { fill } from 'lodash'
import { Stack, Box, Typography, Grid } from '@mui/material'
import { Product } from 'type'
import { useProductQuery } from 'services/productApi'

const RelatedProductList: React.FC = () => {
  const { data = [] } = useProductQuery({ page: 1, per_page: 4 })
  // const products: Product[] = useMemo(
  //   () =>
  //     fill(Array(4), {
  //       images: [String(faker.image.unsplash.objects())], // faker.image.business(340, 340, false),
  //       price: Number(faker.commerce.price()),
  //       mrp: Number(faker.commerce.price()),
  //       title: faker.commerce.productName(),
  //       review_ratings: 4
  //     }).map((a, i) => ({ id: i + 1, ...a })),
  //   []
  // )

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">Related Products</Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {data.map((item, index) => (
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
