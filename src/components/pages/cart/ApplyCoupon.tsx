import { Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const ApplyCoupon: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Coupons</Typography>
      <ButtonGroup fullWidth>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Enter coupon code"
          sx={{ '&>div': { borderTopRightRadius: 0, borderBottomRightRadius: 0 } }}
        />
        <Button
          variant="contained"
          sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: 100 }}
        >
          Apply
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default ApplyCoupon
