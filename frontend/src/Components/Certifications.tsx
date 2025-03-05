import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import certifications from '../interfaces/CertificationLevels';

function ProgressionPage() {
  const [majorIndex, setMajorIndex] = useState<number>(0);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
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
          (subCertification, cIndex) => {
            return <h1 key={cIndex}>{subCertification.name}</h1>;
          },
        )}
      </div>
    </>
  );
}

export default ProgressionPage;
