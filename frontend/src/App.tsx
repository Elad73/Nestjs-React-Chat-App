import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import router from './components/Routes';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './constants/apollo-client';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
