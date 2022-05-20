import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import QuantityButton from 'components/common/QuantityButton'
import React, { useMemo } from 'react'
import RemoveCartItem from 'components/pages/cart/RemoveCartItem'
import PriceLabel from 'components/common/PriceLabel'

export type CartItemType = {
  id: number
  imageUrl: string
  price: string
  mrp: string
  name: string
  quantity: number
}

type Props = {
  cartItem: CartItemType
}

const CartItem: React.FC<Props> = (props) => {
  const { cartItem } = props
  const totalPrice: number = useMemo(
    () => Number(cartItem.price) * cartItem.quantity,
    [cartItem, cartItem.price, cartItem.quantity]
  )
  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Avatar alt="Remy Sharp" src={cartItem.imageUrl} variant="square" />
            </Box>
            <Box sx={{ mx: 2 }}>
              <Typography>{cartItem.name}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
              >
                <PriceLabel typographyProps={{ variant: 'caption' }} price={cartItem.price} />
                <Box component={'span'} sx={{ fontSize: 10, mx: 1 }}>
                  X
                </Box>
                <Typography component={'span'} variant="caption">
                  {cartItem.quantity}
                </Typography>
                <PriceLabel price={totalPrice} sx={{ marginLeft: 2, color: 'primary.main' }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <QuantityButton />
            <RemoveCartItem />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CartItem
