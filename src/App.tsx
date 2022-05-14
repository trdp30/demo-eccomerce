import React from 'react';
import 'App.css';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from 'theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1" color={'primary'}>
        Root Page application
      </Typography>
    </ThemeProvider>
  );
}

export default App;
