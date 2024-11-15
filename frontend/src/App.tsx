import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import Auth from './components/auth/auth';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  );
}

export default App;
