import React from 'react'
import ProductCard from 'components/pages/products/ProductCard'
import { Stack, Box, Typography, Grid } from '@mui/material'
import { useProductQuery } from 'services/productApi'

const RelatedProductList: React.FC = () => {
  const { data = [], isLoading } = useProductQuery({ page: 1, per_page: 4 })

  if (isLoading || !data) {
    return <Typography>Loading...</Typography>
  }

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
