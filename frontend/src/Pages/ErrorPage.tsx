import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { Typography, Container, Box, Button } from '@mui/material';

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
          <Button variant="contained" component={Link} to="/" sx={{ mt: 3 }}>
            Main Menu
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default ErrorPage;
