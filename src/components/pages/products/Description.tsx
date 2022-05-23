import { Typography, Box } from '@mui/material'
import React from 'react'
import faker from '@faker-js/faker'

type Props = {
  description?: string
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <Box>
      <Typography variant="subtitle2">Description</Typography>
      <Box>
        <Typography variant="caption">{description}</Typography>
      </Box>
    </Box>
  )
}

export default Description
