import Box from '@mui/material/Box/Box';
import NavigationBar from '../Components/NavigationBar';
import typingVideo from '../assets/home-page-animation.mp4'
import Grid2 from '@mui/material/Grid2/Grid2';
import rocketImage from '../assets/space-man.jpeg';

function MenuPage () {
  return (
    <>
      <NavigationBar />
      <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
        <video autoPlay muted playsInline style={{ width: '100%' }}>
          <source src={typingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Grid2 container spacing={4} >
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
          <h1>Reach a speed higher than you could ever imagine</h1>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
          <Box
            width={'100%'}
            component="img"
            alt="certification-image"
            src={rocketImage}
          />

        </Grid2>

      </Grid2>
    </>
  );
}

export default MenuPage;