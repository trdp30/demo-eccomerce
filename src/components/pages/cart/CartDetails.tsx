import faker from '@faker-js/faker'
import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceDetails from 'components/pages/cart/PriceDetails'
import PriceLabel from 'components/common/PriceLabel'
import ApplyCoupon from 'components/pages/cart/ApplyCoupon'
import { useNavigate } from 'react-router-dom'

const CartDetails: React.FC = () => {
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <Paper sx={{ padding: 3 }}>
      <Stack spacing={2} divider={<Divider />}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography>Total</Typography>
          <PriceLabel price={faker.commerce.price()} />
        </Box>
        <Box>
          <ApplyCoupon />
        </Box>
        <Box>
          <PriceDetails />
        </Box>
        <Box>
          <Button fullWidth variant={'contained'} onClick={handleCheckout}>
            Checkout
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}

export default CartDetails
