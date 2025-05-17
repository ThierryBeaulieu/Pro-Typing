import { Certification } from '../../interfaces/CertificationsInterface';
import {
  CircularProgress,
  Box,
  Button,
  Grid2,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import certificationService from '../../services/CertificationService';

type CertificationType = {
  data: Certification;
};

function CertificationCard({ data }: CertificationType) {
  const navigate = useNavigate();

  // todo: keep track of all certifications done.
  const isCertificationObtained = (wpm: number) => {
    const certification: string | null = localStorage.getItem(wpm.toString());
    return certification === null ? false : true;
  };

  const handleCertificationClick = (id: string) => {
    navigate(`../certification/${id}`);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: { xs: 4, sm: 4, md: 2 },
        }}
      >
        <Box
          width={'100%'}
          component="img"
          alt="certification-image"
          src={data.image}
        />
      </Box>

      <Box padding={2}>
        <h2>{data.name}</h2>
        <h3>{data.range}</h3>
        <p>{data.description}</p>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 2,
            paddingTop: 2,
            gap: 2,
            flexDirection: 'column',
          }}
        >
          {isCertificationObtained(50) ? (
            <Button
              color={'secondary'}
              variant="contained"
              onClick={() => {
                handleCertificationClick(data.id);
              }}
            >
              Complete again
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                handleCertificationClick(data.id);
              }}
            >
              Take Certification
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

function CertificationsContent() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    certificationService
      .fetchAllCertifications()
      .then((data) => setCertifications(data))
      .catch((error) => console.error('Error parsing certifications', error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Certifications
      </Typography>

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
        <Grid2 container spacing={4}>
          {certifications.map((data, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
              <CertificationCard data={data} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
}

export default CertificationsContent;
