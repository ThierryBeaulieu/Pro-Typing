import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import certifications from '../interfaces/CertificationLevels';
import { Button, Typography } from '@mui/material';

function ProgressionPage() {
  const [majorIndex, setMajorIndex] = useState<number>(0);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newIndex: number,
  ) => {
    if (newIndex !== null) setMajorIndex(newIndex);
  };

  return (
    <>
      <div className="certification-options">
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
      </div>
      <div className="typist-section">
        {certifications[majorIndex].subCertifications.map(
          (subCertification, cIndex) => (
            <div className="certification-divider">
              <div className="certification-description" key={cIndex}>
                <Typography variant="h1">{subCertification.name}</Typography>
                <Typography variant="h2">{subCertification.range}</Typography>
                <p>{subCertification.description}</p>
              </div>
              <div className="certification-buttons">
                <Button variant="outlined">Training</Button>
                <Button variant="outlined">Take Certification</Button>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}

export default ProgressionPage;
