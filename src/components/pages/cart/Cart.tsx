import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import CartItemList from 'components/pages/cart/CartItemList'
import CartDetails from 'components/pages/cart/CartDetails'

const Cart: React.FC = () => {
  return (
    <Container sx={{ py: '30px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack>
            <Box>
              <CartItemList />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <CartDetails />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart
