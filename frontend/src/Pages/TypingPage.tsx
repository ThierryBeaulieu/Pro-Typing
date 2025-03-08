import TypingContent from '../components/TypingContent';
import NavigationBar from '../components/NavigationBar';
import Box from '@mui/material/Box/Box';

function TypingPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression">
        <TypingContent />
      </Box>
    </>
  );
}

export default TypingPage;
