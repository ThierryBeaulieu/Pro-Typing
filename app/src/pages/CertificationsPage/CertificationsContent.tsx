import { Certification } from '../../interfaces/CertificationsInterface';
import { Box, Button, Grid2 } from '@mui/material';
import RunningMan from '../../assets/certifications-type/running-man.jpeg';
import BikeMan from '../../assets/certifications-type/cycling-man.jpeg';
import SpaceMan from '../../assets/certifications-type/space-man.jpeg';
import SkateBoard from '../../assets/certifications-type/skate-board.png';
import DivingMan from '../../assets/certifications-type/diving-man.jpeg';
import DrivingMan from '../../assets/certifications-type/driving-man.jpeg';
import FighterJet from '../../assets/certifications-type/fighter-jet.png';
import MotorCycle from '../../assets/certifications-type/motorcycle.png';
import TrainDriving from '../../assets/certifications-type/train.png';

import { useNavigate } from 'react-router';
import majorCertifications from '../../services/CertificationService';

type CertificationCardType = {
  image: string;
  data: Certification;
};

function CertificationCard({ image, data }: CertificationCardType) {
  const navigate = useNavigate();

  const handleCertificationClick = (certificationId: string) => {
    navigate(`/certification/${certificationId}`);
  };

  const isCertificationObtained = (wpm: number) => {
    const certification: string | null = localStorage.getItem(wpm.toString());
    return certification === null ? false : true;
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
          src={image}
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
          {isCertificationObtained(data.wordsPerMinute[0]) ? (
            <Button
              color={'secondary'}
              variant="contained"
              onClick={() => handleCertificationClick(data.id)}
            >
              Complete again
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => handleCertificationClick(data.id)}
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
  const certifications = majorCertifications;

  const images: string[] = [
    RunningMan,
    SkateBoard,
    BikeMan,
    DivingMan,
    MotorCycle,
    DrivingMan,
    TrainDriving,
    FighterJet,
    SpaceMan,
  ];
  return (
    <>
      <h1>Certifications</h1>
      <Grid2 container spacing={4}>
        {certifications[0].certifications.map((data, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
            <CertificationCard image={images[index]} data={data} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default CertificationsContent;
