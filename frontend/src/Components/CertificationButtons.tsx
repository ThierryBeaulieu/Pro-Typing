import { Box, Button } from '@mui/material';
import { useState } from 'react';

interface CertificationButtonsProp {
  wordsPerMinute: number[];
}

function CertificationButtons({ wordsPerMinute }: CertificationButtonsProp) {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState(!state);
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
            <Button key={index} variant="outlined" onClick={handleClick}>
              {wpm} wpm
            </Button>
          ))
        )}
      </Box>
    </>
  );
}

export default CertificationButtons;
