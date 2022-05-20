import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceLabel from 'components/common/PriceLabel'

const PriceDetails: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Price Details</Typography>
      <Box>
        <Stack>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="caption">Price</Typography>
            <PriceLabel price={1199} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="caption">Discount</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              - <PriceLabel price={1199} typographyProps={{ variant: 'caption' }} iconProps={{}} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="caption">Delivery Charges</Typography>
            <Typography>Free</Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2">Total Amount</Typography>
        <PriceLabel
          price={1199}
          sx={{ color: 'primary.main', fontWeight: 500 }}
          typographyProps={{ sx: { fontWeight: 500 } }}
        />
      </Box>
    </Stack>
  )
}

export default PriceDetails
