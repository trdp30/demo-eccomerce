import React from 'react'
import RouterLink from 'components/common/RouterLink'
import { Box, Typography, Rating, Paper, ButtonGroup, Stack } from '@mui/material'
import AddToCartButton from 'components/common/AddToCartButton'
import BuyNowButton from 'components/common/BuyNowButton'
import { Product } from 'type'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = (props) => {
  const { product } = props
  return (
    <Paper sx={{ width: '100%', height: '100%' }}>
      <RouterLink to={`../${product.id}`}>
        <Box>
          <Box
            component={'img'}
            src={product.images[0]}
            sx={{ width: '100%', height: '250px' }}
            loading="lazy"
          ></Box>
        </Box>
      </RouterLink>
      <Stack spacing={1} sx={{ padding: '0px 10px 20px 10px' }}>
        <Box>
          <Typography sx={{ fontWeight: 500, marginTop: '10px' }} noWrap={true}>
            {product.title}
          </Typography>
          <Box>
            <Box sx={{ marginTop: '5px', marginBottom: '5px' }}>
              <Rating size="small" name="product-rating" value={4} readOnly={true} />
            </Box>
            <Typography color={'primary'}>
              Rs: {product.price}{' '}
              <Typography sx={{ color: 'gray' }} component={'del'}>
                {product.mrp}
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <ButtonGroup>
            <AddToCartButton />
            <BuyNowButton to={'product/' + product.id} />
          </ButtonGroup>
        </Box>
        {/* <Box sx={{ textAlign: 'center' }}>
          <AddProductToServer product={product} />
        </Box> */}
      </Stack>
    </Paper>
  )
}

export default ProductCard
