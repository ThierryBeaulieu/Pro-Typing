import { Box, CircularProgress } from '@mui/material';

interface CircularProgressWithTextProp {
  text: string;
}

function CircularProgressText({ text }: CircularProgressWithTextProp) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress size="8rem" />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)', fontSize: '1.5rem' }}
      >
        {text}
      </Box>
    </Box>
  );
}

export default CircularProgressText;
