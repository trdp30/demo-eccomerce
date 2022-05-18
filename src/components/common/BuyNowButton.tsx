import { Button, ButtonTypeMap } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export type BuyNowButtonProps = {
  to: string
  buttonProps?: ButtonTypeMap
}
const BuyNowButton: React.FC<BuyNowButtonProps> = (props) => {
  const navigate = useNavigate()
  const { to, buttonProps = {} } = props

  const handleClick = () => {
    navigate(to)
  }
  return (
    <Button variant={'contained'} {...buttonProps} onClick={handleClick}>
      Buy Now
    </Button>
  )
}

export default BuyNowButton
