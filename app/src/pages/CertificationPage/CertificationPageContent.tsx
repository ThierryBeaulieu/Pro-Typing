import Box from '@mui/material/Box/Box';
import { useParams } from 'react-router';
import { Button, Grid2, CircularProgress } from '@mui/material';
import manWorking from '../../assets/man_working.png';
import { useEffect, useState } from 'react';
import TypingContent from '../TypingPage/TypingPageContent';
import certificationService from '../../services/CertificationService';
import { Certification } from '../../interfaces/CertificationsInterface';

enum pageState {
  PreCertification,
  PreppingCertification,
  Certification,
}

function CertificationMenu() {
  const { certificationID } = useParams();
  const [certification, setCertification] = useState<Certification>();
  const [loading, setLoading] = useState<boolean>(true);
  const [certificationState, setCertificationState] = useState<pageState>(
    pageState.PreCertification,
  );

  useEffect(() => {
    try {
      if (certificationID === undefined) {
        throw new Error('URL does not contain a certification ID');
      }
      certificationService
        .fetchCertification(certificationID)
        .then((data) => {
          if (data === undefined || data === null) {
            throw new Error('The certification fetched is undefined');
          }
          setCertification(data);
        })
        .catch((error) => console.error('Error parsing certifications', error))
        .finally(() => setLoading(false));
    } catch (err) {
      // todo handle the error so that the people after a time out can have
      // access to the page
      console.error(err);
    }
  }, [certificationID]);

  const handleStartCertificationClick = () => {
    setCertificationState(pageState.Certification);
  };

  if (certificationState === pageState.PreCertification) {
    return (
      <>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <CircularProgress />
          </Box>
        ) : (
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, sm: 7, md: 7, lg: 8, xl: 8 }}>
              <h1>Certification {certification?.range} WPM</h1>
              <p style={{ padding: '0px 0px 20px ' }}>
                You are about to start the {certification?.name} words per
                minute certification. Start whenever you feel ready. To obtain
                the certification, you will need an average of{' '}
                {certification?.range} words per minute with an accuracy of 95%.
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
        )}
      </>
    );
  } else {
    return <TypingContent></TypingContent>;
  }
}

export default CertificationMenu;
