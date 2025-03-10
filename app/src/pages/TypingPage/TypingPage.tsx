import TypingPageContent from './TypingPageContent';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Box from '@mui/material/Box/Box';

function TypingPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression">
        <TypingPageContent />
      </Box>
    </>
  );
}

export default TypingPage;
