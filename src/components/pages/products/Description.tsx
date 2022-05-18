import { Typography, Box } from '@mui/material'
import React from 'react'
import faker from '@faker-js/faker'

const Description: React.FC = () => {
  return (
    <Box>
      <Typography variant="subtitle2">Description</Typography>
      <Box>
        <Typography variant="caption">{faker.lorem.paragraph()}</Typography>
      </Box>
    </Box>
  )
}

export default Description
