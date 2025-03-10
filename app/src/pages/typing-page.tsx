import TypingContent from '../components/typing-content';
import NavigationBar from '../components/navigation-bar';
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
