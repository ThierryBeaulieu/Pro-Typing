import certifications from '../../interfaces/MajorCertification';
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

function CertificationsContent() {
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
  const navigate = useNavigate();

  const handleCertificationClick = (wordsPerMinute: number[]) => {
    const min = wordsPerMinute[0];
    const max = wordsPerMinute[wordsPerMinute.length - 1];
    navigate(`/certification/${min}-${max}`);
  };

  const isCertificationObtained = (wpm: number) => {
    const certification: string | null = localStorage.getItem(wpm.toString());
    return certification === null ? false : true;
  };

  return (
    <>
      <h1>Certifications</h1>
      <Grid2 container spacing={4}>
        {certifications[0].subCertifications.map((subCertification, cIndex) => (
          <Grid2 key={cIndex} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
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
                src={images[cIndex]}
              />
            </Box>

            <Box padding={2}>
              <h2>{subCertification.name}</h2>
              <h3>{subCertification.range}</h3>
              <p>{subCertification.description}</p>
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
                {isCertificationObtained(subCertification.wordsPerMinute[0]) ? (
                  <Button
                    color={'secondary'}
                    variant="contained"
                    onClick={() =>
                      handleCertificationClick(subCertification.wordsPerMinute)
                    }
                  >
                    Completed
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() =>
                      handleCertificationClick(subCertification.wordsPerMinute)
                    }
                  >
                    Take Certification
                  </Button>
                )}
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}

export default CertificationsContent;
