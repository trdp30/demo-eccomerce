import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

export default function RemoveCartItem() {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  )
}
