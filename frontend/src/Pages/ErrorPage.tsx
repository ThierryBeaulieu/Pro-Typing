import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import { Typography, Container, Box } from '@mui/material';

function ErrorPage() {
  return (
    <>
      <NavigationBar name={'Error'} />
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h3">404 - Page Not Found</Typography>
          <Typography variant="h6" color="textSecondary">
            The page you are looking for does not exist.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default ErrorPage;
