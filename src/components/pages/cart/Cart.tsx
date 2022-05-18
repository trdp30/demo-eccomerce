import { Box, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import CartItemList from 'components/pages/cart/CartItemList'

const Cart: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack>
            <Box>
              <CartItemList />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  )
}

export default Cart
