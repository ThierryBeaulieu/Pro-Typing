import Box from '@mui/material/Box/Box';
import NavigationBar from '../Components/NavigationBar';
import { useParams } from 'react-router';

function TrainingPage() {
  const params = useParams();

  return (
    <>
      <NavigationBar name={`Training page ${params.wpm} WPM`} />
      <Box className="progression">
        You will type a certain amount of words per minute
      </Box>
    </>
  );
}

export default TrainingPage;
