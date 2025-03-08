import Box from '@mui/material/Box/Box';
import { useParams } from 'react-router';
import { Button } from '@mui/material';
import manWorking from '../assets/man_working.png';
import { useState } from 'react';
import TypingContent from '../components/TypingContent';

enum pageState {
  PreCertification,
  Certification,
}

function CertificationMenu() {
  const { wpm } = useParams();
  const [certificationState, setCertificationState] = useState<pageState>(
    pageState.PreCertification,
  );

  const handleStartCertificationClick = () => {
    setCertificationState(pageState.Certification);
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
  } else {
    return <TypingContent/>
  }
}

export default CertificationMenu;
