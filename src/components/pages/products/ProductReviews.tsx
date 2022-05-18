import faker from '@faker-js/faker';
import { Avatar, Box, Divider, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

const ReviewCard: React.FC = () => {
  return (
    <Box>
      <Stack>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Avatar src={faker.image.unsplash.avatar()} sx={{ mx: 1 }} />
          <Box>
            <Typography>{faker.name.findName()}</Typography>
            <Rating size="small" name="product-rating" value={4} readOnly={true} />
          </Box>
        </Box>
        <Box>
          <Typography variant="caption">{faker.lorem.paragraph()}</Typography>
        </Box>
      </Stack>
      <Divider sx={{ marginTop: 3 }} />
    </Box>
  );
};

const ProductReview: React.FC = () => {
  return (
    <Stack spacing={3}>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </Stack>
  );
};

export default ProductReview;
