import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import faker from '@faker-js/faker'

export default function AvailableOffer() {
  const additionalOffer = useMemo(
    () => [
      {
        title: faker.lorem.lines()
      },
      {
        title: faker.lorem.lines()
      }
    ],
    []
  )

  return (
    <Box>
      <Typography variant="subtitle2">Available Offers</Typography>
      <Box>
        {additionalOffer.map((ao, i) => (
          <Box key={i}>
            <Typography variant="caption">{ao.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
