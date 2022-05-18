import React from 'react';
import RouterLink from 'components/common/RouterLink';
import { Box, Typography, Rating, Paper } from '@mui/material';

export interface Product {
  id: number;
  imageUrl: string;
  price: string;
  mrp: string;
  name: string;
  rating?: number;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <Paper sx={{ width: '100%', height: '100%' }}>
      <RouterLink to={`${product.id}`}>
        <Box>
          <Box
            component={'img'}
            src={product.imageUrl}
            sx={{ width: '100%', height: '250px' }}
          ></Box>
        </Box>
        <Box sx={{ padding: '0px 10px 10px 10px' }}>
          <Typography sx={{ fontWeight: 500, marginTop: '10px' }}>{product.name}</Typography>
          <Box>
            <Box sx={{ marginTop: '5px', marginBottom: '5px' }}>
              <Rating size="small" name="product-rating" value={4} readOnly={true} />
            </Box>
            <Typography color={'primary'}>
              Rs: {product.price}{' '}
              <Typography sx={{ color: 'gray' }} component={'del'}>
                {product.mrp}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </RouterLink>
    </Paper>
  );
};

export default ProductCard;
