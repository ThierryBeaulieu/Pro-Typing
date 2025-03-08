import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import certifications from '../interfaces/MajorCertifications';
import { Box, Button, Grid2 } from '@mui/material';
import RunningMan from '../assets/running-man.jpeg';
import BikeMan from '../assets/cycling-man.jpeg';
import SpaceMan from '../assets/space-man.jpeg';
import SkateBoard from '../assets/skate-board.png';
import DivingMan from '../assets/diving-man.jpeg';
import DrivingMan from '../assets/driving-man.jpeg';
import FighterJet from '../assets/fighter-jet.png';
import MotorCycle from '../assets/motorcylce.png';
import TrainDriving from '../assets/traing.png';

import { useNavigate } from 'react-router';

function CertificationsMenu() {
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
  const [majorIndex, setMajorIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newIndex: number,
  ) => {
    if (newIndex !== null) setMajorIndex(newIndex);
  };

  const handleCertificationClick = () => {
    navigate(`/certification/`);
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <ToggleButtonGroup
          color="primary"
          value={majorIndex}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {certifications.map((category, index) => {
            return (
              <ToggleButton key={index} value={index}>
                {category.name}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
      <div className="typist-section">
        <Grid2 container spacing={4}>
          {certifications[majorIndex].subCertifications.map(
            (subCertification, cIndex) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
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
                    <Button
                      variant="outlined"
                      onClick={handleCertificationClick}
                    >
                      Take Certification
                    </Button>
                  </Box>
                </Box>
              </Grid2>
            ),
          )}
        </Grid2>
      </div>
    </>
  );
}

export default CertificationsMenu;
