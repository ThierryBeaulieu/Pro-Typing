import Box from '@mui/material/Box/Box';
import typingVideo from '../../assets/home-page-animation-2.mp4';
import Grid2 from '@mui/material/Grid2/Grid2';
import rocketImage from '../../assets/certifications-type/space-man.jpeg';
import drivingImage from '../../assets/certifications-type/driving-man.jpeg';
import Button from '@mui/material/Button/Button';
import { useNavigate } from 'react-router';
import TypeBetter from '../../assets/type-better.png';

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

function VideoWrapper() {
  return (
    <video autoPlay muted playsInline loop style={{ width: '100%' }}>
      <source src={typingVideo} type="video/mp4" />
      Your browser does not support the video tag.
      <img
        src={TypeBetter}
        alt="Video not supported"
        style={{ width: '100%' }}
      />
    </video>
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
        <VideoWrapper />
      </Box>

      <Grid2 container spacing={4} margin={4}>
        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <h1>Get certified</h1>
          <ul>
            <li>Our brand new brand new AI powered engine ensures that you</li>
            <li>
              Take our AI powered certifications and show to the world that you
              can type fast.
            </li>
            <li>
              Get the edge during the screening process by having our
              certifications.
            </li>
          </ul>
          <p></p>
        </Grid2>

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
