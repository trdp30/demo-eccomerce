import React, { useState } from 'react'
import { Button, ButtonTypeMap } from '@mui/material'
import { useCreateProductMutation, Product } from 'services/productApi'

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
      name: product.name,
      image_url: product.image_url,
      image_id: product.id
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
