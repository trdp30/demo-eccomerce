import { Typography, Box } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import MoreTimeOutlinedIcon from '@mui/icons-material/MoreTimeOutlined'
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'

const TagLine: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '30px 48px',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: '5px'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '10px' }}>
          <LocalShippingOutlinedIcon sx={{ fontSize: '50px' }} />
        </Box>
        <Box>
          <Typography variant="h6">Fast Delivery</Typography>
          <Typography variant="body2">Start from Rs. 10</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '10px' }}>
          <SavingsOutlinedIcon sx={{ fontSize: '50px' }} />
        </Box>

        <Box>
          <Typography variant="h6">Money Guarantee</Typography>
          <Typography variant="body2">7 Days Back</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '10px' }}>
          <MoreTimeOutlinedIcon sx={{ fontSize: '50px' }} />
        </Box>

        <Box>
          <Typography variant="h6">10 Days</Typography>
          <Typography variant="body2">For free return</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '10px' }}>
          <PaymentsOutlinedIcon sx={{ fontSize: '50px' }} />
        </Box>

        <Box>
          <Typography variant="h6">Payment</Typography>
          <Typography variant="body2">Secure system</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ marginRight: '10px' }}>
          <SupportAgentOutlinedIcon sx={{ fontSize: '50px' }} />
        </Box>

        <Box>
          <Typography variant="h6">Online Support</Typography>
          <Typography variant="body2">24/7 daily</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TagLine
