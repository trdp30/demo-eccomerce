import { Box, Grid, Stack, Pagination } from '@mui/material'
import React, { useMemo } from 'react'
import fill from 'lodash/fill'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import ProductCard, { Product } from 'components/pages/products/ProductCard'

const ProductList: React.FC = () => {
  const [pageNumber, updatePageNumber] = useState(1)
  const products: Product[] = useMemo(() => {
    return fill(Array(20), {
      imageUrl: faker.image.business(270, 250, false),
      price: faker.commerce.price(),
      mrp: faker.commerce.price(),
      name: faker.commerce.productName()
    }).map((d, i) => ({ ...d, id: ++i }))
  }, [pageNumber])

  const handlePageNumberChange = (e: React.ChangeEvent<unknown>, page: number) =>
    updatePageNumber(() => page)

  return (
    <Stack>
      <Box>
        <Grid container spacing={3}>
          {products.map((product) => (
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
