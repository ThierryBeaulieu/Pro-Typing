import { Link } from 'react-router-dom';
import NavigationBar from '../components/navigation-bar';
import { Typography, Container, Box, Button } from '@mui/material';

function ErrorPage() {
  return (
    <>
      <NavigationBar />
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h3">400 - Error occured</Typography>
          <Typography variant="h6" color="textSecondary">
            An issue happened, please try again
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
