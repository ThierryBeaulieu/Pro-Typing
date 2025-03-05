import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const certifications = [
  {
    Advanced: {
      'Associate Typist': ['40', '45', '50', '55'],
      'Certified Typist': ['60', '65', '70', '75'],
      'Proficient Typist': ['80', '85', '90', '95'],
    },
  },

  {
    Professional: {
      'Advanced Typist': ['100', '105', '110', '115'],
      'Expert Typist': ['120', '125', '130', '135'],
      'Master Typist': ['140', '145', '150', '155'],
    },
  },
  {
    Elite: {
      'Elite Typist': ['160', '165', '170', '175'],
      'Distinguished Typist': ['180', '185', '190', '195'],
      'Virtuoso Typist': ['200', '205', '210', '215'],
    },
  },
  {
    Grandmaster: {
      'Grandmaster Typist': ['220', '225', '230', '235'],
      'Pinnacle Typist': ['240', '245', '250', '255'],
      'Legend Typist': ['260', '265', '270', '275'],
    },
  },
  {
    'Hall of Fame': {
      'Hall of Fame Typist': ['280', '285', '290', '295'],
      'World-Class Typist': ['300', '305', '310', '315'],
      'Record-Breaking Typist': ['320', '325', '330', '335'],
    },
  },
];

function ProgressionPage() {
  const [alignment, setAlignment] = React.useState('Intermediate');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <>
      <div className="certification-options">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          {certifications.map((category, index) => {
            const categoryName = Object.keys(category)[0]; // Extract the category name (e.g., "Advanced", "Professional")
            return (
              <ToggleButton key={index} value={categoryName}>
                {categoryName}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </div>
    </>
  );
}

export default ProgressionPage;
