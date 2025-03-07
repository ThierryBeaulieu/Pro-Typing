import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import certifications from '../interfaces/MajorCertifications';
import { Box, Button, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CertificationButtons from './CertificationButtons';
import RunningMan from '../assets/running-man.jpeg';
import BikeMan from '../assets/cycling-man.jpeg';
import SpaceMan from '../assets/space-man.jpeg';

function CertificationsMenu() {
  const images: string[] = [RunningMan, BikeMan, SpaceMan];
  const [majorIndex, setMajorIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newIndex: number,
  ) => {
    if (newIndex !== null) setMajorIndex(newIndex);
  };

  const handleTrainingClick = () => {
    navigate('/training/543');
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
        {certifications[majorIndex].subCertifications.map(
          (subCertification, cIndex) => (
            <Grid2 container spacing={2} key={cIndex}>
              <Grid2
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: { xs: 4, sm: 4, md: 2 },
                }}
                size={{ xs: 12, sm: 12, md: 6 }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 'auto',
                    width: 450,
                    maxWidth: { xs: 350, sm: 350, md: 350, lg: 350, xl: 350 },
                  }}
                  alt="certification-image"
                  src={images[cIndex]}
                />
              </Grid2>

              <Grid2 padding={2} size={{ xs: 12, sm: 12, md: 6 }}>
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
                    flexDirection: 'row',
                  }}
                >
                  <Button variant="outlined" onClick={handleTrainingClick}>
                    Training
                  </Button>
                  <CertificationButtons
                    wordsPerMinute={subCertification.wordsPerMinute}
                  />
                </Box>
              </Grid2>
            </Grid2>
          ),
        )}
      </div>
    </>
  );
}

export default CertificationsMenu;
