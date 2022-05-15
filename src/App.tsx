import React from 'react';
import 'App.css';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import theme from 'theme';
import Home from 'components/pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

const cache = createCache({
  key: 'demo-ecommerce',
  prepend: true
});

function App() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </StyledEngineProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
