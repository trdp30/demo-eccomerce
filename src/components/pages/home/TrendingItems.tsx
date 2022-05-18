import { Stack, Box, Typography, Grid, Rating } from '@mui/material';
import RouterLink from 'components/common/RouterLink';
import React from 'react';

const itemData = [
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-1.webp',
    redirectTo: '/product/1'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-2.webp',
    redirectTo: '/product/2'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-3.webp',
    redirectTo: '/product/3'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-4.webp',
    redirectTo: '/product/4'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-3.webp',
    redirectTo: '/product/5'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-4.webp',
    redirectTo: '/product/4'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-3.webp',
    redirectTo: '/product/3'
  },
  {
    name: 'Smart Watch Black',
    reviewStar: 4,
    price: 187,
    mrp: 250,
    imageUrl: '/assets/images/flash-deal-img-4.webp',
    redirectTo: '/product/4'
  }
];

const TrendingItems: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6">Trending Items</Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          {itemData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <RouterLink to={item.redirectTo}>
                <Box>
                  <Box component={'img'} src={item.imageUrl}></Box>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 500, marginTop: '10px' }}>{item.name}</Typography>
                  <Box>
                    <Box sx={{ marginTop: '5px', marginBottom: '5px' }}>
                      <Rating size="small" name="product-rating" value={4} readOnly={true} />
                    </Box>
                    <Typography color={'primary'}>
                      Rs: {item.price}{' '}
                      <Typography sx={{ color: 'gray' }} component={'del'}>
                        {item.mrp}
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </RouterLink>
            </Grid>
          ))}
        </Grid>
        {/* </Grid> */}
      </Box>
    </Stack>
  );
};

export default TrendingItems;
