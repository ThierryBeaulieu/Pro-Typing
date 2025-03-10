import Box from '@mui/material/Box/Box';
import NavigationBar from '../Components/NavigationBar';
import Container from '@mui/material/Container/Container';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button/Button';
import { Link } from 'react-router-dom';

function TrainingPage() {
  return (
    <>
      <NavigationBar />
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h3">Sorry</Typography>
          <Typography variant="h6" color="textSecondary">
            The training page is unfortunately under construction at the moment.
            Please try again later
          </Typography>
          <Button variant="contained" component={Link} to="/" sx={{ mt: 3 }}>
            Main Menu
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default TrainingPage;
