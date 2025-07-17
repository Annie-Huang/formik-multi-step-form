import React from 'react';
import { Home } from './Home';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Box marginTop={10}>
        <Home />
      </Box>
    </Container>
  );
}

export default App;
