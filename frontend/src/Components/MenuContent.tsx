import Box from '@mui/material/Box/Box';
import typingVideo from '../assets/home-page-animation-2.mp4';
import Grid2 from '@mui/material/Grid2/Grid2';
import rocketImage from '../assets/space-man.jpeg';
import drivingImage from '../assets/driving-man.jpeg';
import Button from '@mui/material/Button/Button';
import { useNavigate } from 'react-router';

function ImageWrapper({ imageName }: { imageName: string }) {
  return (
    <Box
      width={'100%'}
      component="img"
      alt="certification-image"
      src={imageName}
      sx={{ borderRadius: '30px' }}
    />
  );
}

type TextWrapperProps = {
  path: string;
  text: string;
  buttonTxt: string;
};

function TextWrapper({ path, text, buttonTxt }: TextWrapperProps) {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate(path);
  };

  return (
    <>
      <Grid2
        size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
        sx={{
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
          {text}
        </h3>
        <Button onClick={navigateToPath} sx={{ mt: 3 }} variant="contained">
          {buttonTxt}
        </Button>
      </Grid2>
    </>
  );
}

function MenuContent() {
  return (
    <>
      <Box paddingTop={1}></Box>
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '70%' },
          margin: { xs: '5%', sm: '10%', md: 'auto' },
          maxWidth: 800,
        }}
      >
        <video autoPlay muted playsInline loop style={{ width: '100%' }}>
          <source src={typingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Grid2 container spacing={4} margin={4}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <ImageWrapper imageName={rocketImage} />
        </Grid2>

        <TextWrapper
          path={'/certifications'}
          text={'Show your impressive skills to your future employer'}
          buttonTxt={'Get Certified'}
        />

        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <ImageWrapper imageName={drivingImage} />
        </Grid2>

        <TextWrapper
          path={'/training'}
          text={'Reach a speed higher than you could ever imagine'}
          buttonTxt={'Start Training'}
        />
      </Grid2>
    </>
  );
}

export default MenuContent;
