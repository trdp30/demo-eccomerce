import React from 'react';
import 'App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';
import Home from 'components/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
