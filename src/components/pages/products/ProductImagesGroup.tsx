import React from 'react'
import Avatar from '@mui/material/Avatar'
import { Box } from '@mui/material'

type Props = {
  images: Array<string>
}

const ProductImagesGroup: React.FC<Props> = (props) => {
  const { images = [] } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: 'calc(100% - 50px)',
        overflowX: 'auto'
      }}
    >
      {images.map((image) => (
        <Avatar
          key={image}
          alt={image}
          src={image}
          variant="square"
          sx={{ mx: 1, width: '40px', height: '40px' }}
        />
      ))}
      {/* <Avatar
        alt="Travis Howard"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1, width: "40px", height: "40px" }}
      />
      <Avatar
        alt="Cindy Baker"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1, width: "40px", height: "40px" }}
      />
      <Avatar
        alt="Agnes Walker"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1, width: "40px", height: "40px" }}
      />
      <Avatar
        alt="Trevor Henderson"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1, width: "40px", height: "40px" }}
      /> */}
    </Box>
  )
}

export default ProductImagesGroup
