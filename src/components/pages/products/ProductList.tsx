import { Box, Grid, Stack, Pagination } from '@mui/material'
import React, { useMemo } from 'react'
import { faker } from '@faker-js/faker'
import { useState } from 'react'
import ProductCard from 'components/pages/products/ProductCard'
import { useProductQuery, OrganizationProductType } from 'services/productApi'

const ProductList: React.FC = () => {
  const [pageNumber, updatePageNumber] = useState<number>(1)
  const { data } = useProductQuery(pageNumber)
  const products: OrganizationProductType[] | [] = useMemo(
    () =>
      Array.isArray(data)
        ? data.map(({ id, urls, image_url, ...rest }: OrganizationProductType) => ({
            id: id,
            image_url: urls?.small || image_url,
            price: faker.commerce.price(),
            mrp: faker.commerce.price(),
            ...rest
          }))
        : [],
    [data]
  )

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
