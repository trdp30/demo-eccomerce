import { Container, Grid } from '@mui/material';
import React from 'react';
import ProductList from './ProduictList';

const Products: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item display={{ sm: 'none', md: 'block' }} md={3}></Grid>
        <Grid item md={9}>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
