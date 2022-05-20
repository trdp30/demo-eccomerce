import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import { Typography, Box } from '@mui/material'

interface Props {
  price: number | string
  typographyProps?: { [x: string]: string | number | object }
  iconProps?: { [x: string]: string | number | object }
  sx?: { [x: string]: string | number }
}

const PriceLabel: React.FC<Props> = (props) => {
  const { price, typographyProps, iconProps, sx } = props
  return (
    <Box
      component={'span'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '14px',
        alignItems: 'center',
        ...sx
      }}
    >
      <CurrencyRupeeIcon sx={{ fontSize: '1rem' }} {...iconProps} />
      <Typography component={'span'} sx={{ fontSize: '1rem' }} {...typographyProps}>
        {price}
      </Typography>
    </Box>
  )
}

export default PriceLabel
