import Box from '@mui/material/Box/Box';
import NavigationBar from '../Components/NavigationBar';
import typingVideo from '../assets/home-page-animation.mp4';
import Grid2 from '@mui/material/Grid2/Grid2';
import rocketImage from '../assets/space-man.jpeg';
import drivingImage from '../assets/driving-man.jpeg';
import Button from '@mui/material/Button/Button';
import { useNavigate } from 'react-router';

function MenuPage() {
  const navigate = useNavigate();

  const navigateToTraining = () => {
    navigate('/training');
  };

  return (
    <>
      <NavigationBar />
      <Grid2 container spacing={4} margin={4}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <Box
            width={'100%'}
            component="img"
            alt="certification-image"
            src={drivingImage}
            sx={{ borderRadius: '30px' }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          sx={{
            backgroundColor: '#081221',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 4,
          }}
        >
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            Show you impressive skills to your future employer
          </h3>
          <Button
            onClick={navigateToTraining}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Get Certified
          </Button>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <Box
            width={'100%'}
            component="img"
            alt="certification-image"
            src={rocketImage}
            sx={{ borderRadius: '30px' }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          sx={{
            backgroundColor: '#081221',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: 4,
          }}
        >
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            Reach a speed higher than you could ever imagine
          </h3>
          <Button
            onClick={navigateToTraining}
            sx={{ mt: 3 }}
            variant="contained"
          >
            Start Training
          </Button>
        </Grid2>
      </Grid2>

      <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
        <video autoPlay muted playsInline style={{ width: '100%' }}>
          <source src={typingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </>
  );
}

export default MenuPage;
