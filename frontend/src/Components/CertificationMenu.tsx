import Box from '@mui/material/Box/Box';
import { useParams } from 'react-router';
import { Button } from '@mui/material';
import manWorking from '../assets/man_working.png';
import { useEffect, useState } from 'react';
import CircularProgressText from './CircularProgressText';
import TypingContent from './TypingContent';

const DEFAULT_TIMING: number = 0; // todo change in production

enum pageState {
  PreCertification,
  PreppingCertification,
  Certification,
}

function CertificationMenu() {
  const { wpm } = useParams();
  const [certificationState, setCertificationState] = useState<pageState>(
    pageState.PreCertification,
  );
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (
      timeLeft === 0 &&
      certificationState === pageState.PreppingCertification
    ) {
      setCertificationState(pageState.Certification);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, certificationState]);

  const handleStartCertificationClick = () => {
    setCertificationState(pageState.PreppingCertification);
    setTimeLeft(DEFAULT_TIMING);
  };

  const handleGoBackClick = () => {
    setCertificationState(pageState.PreCertification);
  };

  if (certificationState === pageState.PreCertification) {
    return (
      <Box className="certification-disclaimer">
        <Box>
          <h1>Certification {wpm} WPM</h1>
          <p style={{ padding: '0px 0px 20px ' }}>
            You are about to start the {wpm} words per minute certification.
            Start whenever you feel ready. To obtain the certification, you will
            need an average of {wpm} words per minute with an accuracy of 95%.
          </p>
          <Button onClick={handleStartCertificationClick} variant="contained">
            Start Certification
          </Button>
        </Box>
        <Box sx={{ width: 330, height: 300 }}>
          <img
            src={manWorking}
            alt="Illustration of a man working"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Box>
    );
  } else if (certificationState === pageState.PreppingCertification) {
    return (
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
      >
        <h1>Certification starts in</h1>
        <Box display={'flex'} justifyContent={'center'} padding={'5vh 0 4vh 0'}>
          <CircularProgressText text={timeLeft.toString()} />
        </Box>
        <Button onClick={handleGoBackClick} variant="contained">
          Go back
        </Button>
      </Box>
    );
  } else {
    return <TypingContent></TypingContent>;
  }
}

export default CertificationMenu;
