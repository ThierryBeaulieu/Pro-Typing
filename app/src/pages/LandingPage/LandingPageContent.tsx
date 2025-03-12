import Box from '@mui/material/Box/Box';
import Grid2 from '@mui/material/Grid2/Grid2';
import rocketImage from '../../assets/certifications-type/space-man.jpeg';
import drivingImage from '../../assets/certifications-type/driving-man.jpeg';
import appDescription from '../../assets/app-description.png';
import Button from '@mui/material/Button/Button';
import { useNavigate } from 'react-router';
import { Typography } from '@mui/material';

type TextWrapperProps = {
  path: string;
  text: string;
  buttonTxt?: string;
  size: object;
};

function TextWrapper({ path, text, buttonTxt, size }: TextWrapperProps) {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate(path);
  };

  return (
    <>
      <Grid2
        size={size}
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
        {buttonTxt !== undefined ? (
          <Button onClick={navigateToPath} sx={{ mt: 3 }} variant="contained">
            {buttonTxt}
          </Button>
        ) : (
          <></>
        )}
      </Grid2>
    </>
  );
}

function TextWrapperDescription({ size }: { size: object }) {
  return (
    <>
      <Grid2
        size={size}
        sx={{
          borderRadius: '30px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 2,
          padding: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: '24px',
              sm: '30px',
              md: '36px',
              lg: '42px',
              xl: '50px',
            },
          }}
        >
          Certify your typing speed
        </Typography>
        <Typography>
          The average typing speed is around 40 words per minute, fast typing
          speeds could give you an edge in the interviewing process.
        </Typography>
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

function MenuContent() {
  return (
    <>
      <Box paddingTop={1}></Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '26px',
              sm: '36px',
              md: '48px',
              lg: '64px',
              xl: '80px',
            },
          }}
        >
          Type Better and Faster
        </Typography>
      </Box>

      <Grid2 container spacing={4} margin={4}>
        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <ImageWrapper imageName={appDescription} />
        </Grid2>

        <TextWrapperDescription size={{ xs: 12, sm: 6, md: 9, lg: 9 }} />

        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <ImageWrapper imageName={rocketImage} />
        </Grid2>

        <TextWrapper
          size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          path={'/certifications'}
          text={
            'Get a certification with our state of the art AI engin that prevents cheating'
          }
          buttonTxt={'Get Certified'}
        />

        <Grid2 size={{ xs: 12, sm: 6, md: 3, lg: 3 }}>
          <ImageWrapper imageName={drivingImage} />
        </Grid2>

        <TextWrapper
          size={{ xs: 12, sm: 6, md: 3, lg: 3 }}
          path={'/training'}
          text={'Reach a speed higher than you could ever imagine'}
          buttonTxt={'Start Training'}
        />
      </Grid2>
    </>
  );
}

export default MenuContent;
