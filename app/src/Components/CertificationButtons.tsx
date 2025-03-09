import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CertificationButtonsProp {
  wordsPerMinute: number[];
}

function CertificationButtons({ wordsPerMinute }: CertificationButtonsProp) {
  const [state, setState] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setState(!state);
  };

  const handleCertificationClick = (wpm: number) => {
    navigate(`/certification/${wpm}`);
  };

  return (
    <>
      <Box display="flex" gap="10px">
        {state ? (
          <Button variant="outlined" onClick={handleClick}>
            Take Certification
          </Button>
        ) : (
          wordsPerMinute.map((wpm, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleCertificationClick(wpm)}
            >
              {wpm} wpm
            </Button>
          ))
        )}
      </Box>
    </>
  );
}

export default CertificationButtons;
