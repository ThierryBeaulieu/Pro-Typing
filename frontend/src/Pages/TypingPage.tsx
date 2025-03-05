import TypingContent from '../Components/TypingContent';
import NavigationBar from '../Components/NavigationBar';
import Box from '@mui/material/Box/Box';

function TypingPage() {
  return (
    <>
      <NavigationBar name={'Training'} />
      <Box className="progression">
        <TypingContent />
      </Box>
    </>
  );
}

export default TypingPage;
