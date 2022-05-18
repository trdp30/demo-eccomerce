import { Button, ButtonTypeMap } from '@mui/material'
import React from 'react'

export type AddToCartButtonProps = {
  buttonProps?: ButtonTypeMap
}
const AddToCartButton: React.FC<AddToCartButtonProps> = (props) => {
  const { buttonProps = {} } = props

  const handleClick = () => {
    // navigate(to);
  }
  return (
    <Button variant={'outlined'} {...buttonProps} onClick={handleClick}>
      Add To Cart
    </Button>
  )
}

export default AddToCartButton
