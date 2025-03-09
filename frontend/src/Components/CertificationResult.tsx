import { Box, Button, Grid2 } from '@mui/material';
import CertificationState from '../enum/certificationState';
import Congrats from '../assets/congrats.jpeg';
import StillWorkToDo from '../assets/work-to-do.jpeg';
import { useNavigate } from 'react-router';
import PdfCertification from '../assets/pro-typing-certificate.pdf';
import CertificateImage from '../assets/certificate.png';

interface CertificationResultProp {
  result: CertificationState;
  accuracy: number;
  wpm: number;
}

function Certificate({ wpm, accuracy }: { wpm: number; accuracy: number }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PdfCertification;
    link.download = 'certification.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 7, md: 7, lg: 8, xl: 8 }}>
          <Box>
            <h2>Certification results</h2>
            <h3 style={{ paddingTop: 5 }}>
              You achieve {wpm} words per minute with an accuracy of {accuracy}%
            </h3>
          </Box>
          <Box paddingTop={4}>
            Congratulations! You are now the proud owner of this certificate.
            Feel free to share it on LinkedIn, Indeed or other social media.
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 5, md: 5, lg: 4, xl: 4 }}>
          <Box
            width={'100%'}
            component="img"
            alt="certification-image"
            src={Congrats}
          />
        </Grid2>
      </Grid2>

      <Box
        paddingTop={5}
        width={'100%'}
        component="img"
        alt="certification-image"
        src={CertificateImage}
      />

      <Button onClick={handleDownload} variant="outlined">
        Download
      </Button>
    </>
  );
}

function Redirection({ wpm, accuracy }: { wpm: number; accuracy: number }) {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    if (link === '/certification') {
      window.location.reload();
    }

    navigate(link);
  };
  return (
    <>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 7, md: 7, lg: 8, xl: 8 }}>
          <Box>
            <h2>Certification results</h2>
            <h3 style={{ paddingTop: 5 }}>
              You achieve {wpm} words per minute with an accuracy of {accuracy}%
            </h3>
          </Box>
          <Box paddingTop={4}>
            Unfortunately, this wasn't enough to achieve the minimum
            requirements for this certification
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 5, md: 5, lg: 4, xl: 4 }}>
          <Box
            width={'100%'}
            component="img"
            alt="certification-image"
            src={StillWorkToDo}
          />
        </Grid2>
      </Grid2>
      <Box
        padding={5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
        }}
      >
        <Button
          onClick={() => handleClick('/certification')}
          variant="contained"
        >
          Try Again
        </Button>
        <Button onClick={() => handleClick('/')} variant="contained">
          Main Menu
        </Button>
      </Box>
    </>
  );
}

function CertificationResult({
  result,
  accuracy,
  wpm,
}: CertificationResultProp) {
  return (
    <Box padding={3}>
      {result === CertificationState.Completed ? (
        <Certificate wpm={wpm} accuracy={accuracy} />
      ) : (
        <Redirection wpm={wpm} accuracy={accuracy} />
      )}
    </Box>
  );
}

export default CertificationResult;
