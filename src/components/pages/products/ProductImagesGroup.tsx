import React from 'react';
import Avatar from '@mui/material/Avatar';
import faker from '@faker-js/faker';
import { Box } from '@mui/material';

const ProductImagesGroup: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Avatar
        alt="Remy Sharp"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1 }}
      />
      <Avatar
        alt="Travis Howard"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1 }}
      />
      <Avatar
        alt="Cindy Baker"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1 }}
      />
      <Avatar
        alt="Agnes Walker"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1 }}
      />
      <Avatar
        alt="Trevor Henderson"
        src={faker.image.unsplash.avatar()}
        variant="square"
        sx={{ mx: 1 }}
      />
    </Box>
  );
};

export default ProductImagesGroup;
