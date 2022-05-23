import { Box, Grid, Stack, Pagination } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ProductCard from 'components/pages/products/ProductCard'
import { useProductQuery } from 'services/productApi'

const ProductList: React.FC = () => {
  const [pageNumber, updatePageNumber] = useState<number>(1)
  const { data = [] } = useProductQuery({ page: pageNumber })

  const handlePageNumberChange = (e: React.ChangeEvent<unknown>, page: number) =>
    updatePageNumber(() => page)

  return (
    <Stack>
      <Box>
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          padding: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end'
        }}
      >
        <Pagination count={10} color="primary" onChange={handlePageNumberChange} />
      </Box>
    </Stack>
  )
}

export default ProductList
