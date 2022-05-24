import { Stack, Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { useProductQuery } from 'services/productApi'
import ProductCard from 'components/pages/products/ProductCard'

const TrendingItems: React.FC = () => {
  const { data = [], isLoading } = useProductQuery({ page: 3, per_page: 8 })

  if (isLoading || !data) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">Trending Items</Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {data.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}

export default TrendingItems
