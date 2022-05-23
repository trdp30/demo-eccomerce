import React, { useState } from 'react'
import { Button, ButtonTypeMap } from '@mui/material'
import { useCreateProductMutation } from 'services/productApi'
import { Product } from 'type'

export type AddProductToServerProps = {
  buttonProps?: ButtonTypeMap
  product: Product
}
const AddProductToServer: React.FC<AddProductToServerProps> = (props) => {
  const [createProduct] = useCreateProductMutation()
  const [isLoading, toggleLoading] = useState(false)
  const { buttonProps = {}, product } = props

  const handleClick = async () => {
    toggleLoading(true)
    await createProduct({
      name: product.title,
      images: product.images
    })
    toggleLoading(false)
  }

  return (
    <Button variant={'text'} {...buttonProps} onClick={handleClick} disabled={isLoading}>
      Add to Server
    </Button>
  )
}

export default AddProductToServer
