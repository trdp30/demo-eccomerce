import faker from '@faker-js/faker'
import { Stack } from '@mui/material'
import { fill } from 'lodash'
import React, { useMemo } from 'react'
import CartItem, { CartItemType } from 'components/pages/cart/CartItem'

const CartItemList: React.FC = () => {
  const cartItems: CartItemType[] = useMemo(
    () =>
      fill(Array(4), {
        imageUrl: faker.image.unsplash.objects(), // faker.image.business(340, 340, false),
        price: faker.commerce.price(),
        mrp: faker.commerce.price(),
        name: faker.commerce.productName(),
        quantity: 2
      }).map((a, i) => ({ id: i + 1, ...a })),
    []
  )
  return (
    <Stack spacing={2}>
      {cartItems.map((cartItem: CartItemType) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </Stack>
  )
}

export default CartItemList
