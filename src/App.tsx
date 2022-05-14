import React from 'react';
import 'App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'theme';
import Home from 'components/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
