import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import certifications from '../interfaces/MajorCertifications';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CertificationButtons from './CertificationButtons';

function CertificationsMenu() {
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
            <div className="certification-divider" key={cIndex}>
              <div className="certification-description" key={cIndex}>
                <h2>{subCertification.name}</h2>
                <h3>{subCertification.range}</h3>
                <p>{subCertification.description}</p>
              </div>
              <div className="certification-buttons">
                <Button variant="outlined" onClick={handleTrainingClick}>
                  Training
                </Button>
                <CertificationButtons
                  wordsPerMinute={subCertification.wordsPerMinute}
                />
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default CertificationsMenu;
