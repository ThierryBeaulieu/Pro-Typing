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
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <h2>{subCertification.name}</h2>
                <h3>{subCertification.range}</h3>
                <p>{subCertification.description}</p>
                <Button variant="outlined" onClick={handleTrainingClick}>
                  Training
                </Button>
                <CertificationButtons
                  wordsPerMinute={subCertification.wordsPerMinute}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <img
                  src={images[cIndex]}
                  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                  alt={`Certification image ${cIndex}`}
                />
              </Grid2>
            </Grid2>
          ),
        )}
      </div>
    </>
  );
}

export default CertificationsMenu;
