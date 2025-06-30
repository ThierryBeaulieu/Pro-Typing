import Box from '@mui/material/Box/Box';
import { Button, Grid2 } from '@mui/material';
import manWorking from '../../assets/man_working.png';
import { useState } from 'react';
import TypingContent from '../TypingPage/TypingPageContent';

enum pageState {
  PreCertification,
  PreppingCertification,
  Certification,
}

function CertificationMenu() {
  const range = '10-20';
  const [certificationState, setCertificationState] = useState<pageState>(
    pageState.PreCertification,
  );

  const handleStartCertificationClick = () => {
    setCertificationState(pageState.Certification);
  };

  if (certificationState === pageState.PreCertification) {
    return (
      <>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, sm: 7, md: 7, lg: 8, xl: 8 }}>
            <h1>Certification {range} WPM</h1>
            <p style={{ padding: '0px 0px 20px ' }}>
              You are about to start the {range} words per minute certification.
              Start whenever you feel ready. To obtain the certification, you
              will need an average of {range} words per minute with an accuracy
              of 95%.
            </p>
            <Box display={'flex'} justifyContent={'center'}>
              <Button
                onClick={handleStartCertificationClick}
                variant="contained"
              >
                Start Certification
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 5, md: 5, lg: 4, xl: 4 }}>
            <Box
              width={'100%'}
              component="img"
              alt="certification-image"
              src={manWorking}
            />
          </Grid2>
        </Grid2>
      </>
    );
  } else {
    return <TypingContent></TypingContent>;
  }
}

export default CertificationMenu;
