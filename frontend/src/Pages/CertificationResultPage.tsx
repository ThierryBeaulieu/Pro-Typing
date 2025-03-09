import { Box } from '@mui/material';
import NavigationBar from '../Components/NavigationBar';
import CertificationResult from '../Components/CertificationResult';
import CertificationState from '../enum/certificationState';

function CertificationPage({
  wpm,
  accuracy,
}: {
  wpm: number;
  accuracy: number;
}) {
  const getResult = () => {
    if (accuracy > 95) return CertificationState.Completed;
    return CertificationState.Failed;
  };

  return (
    <>
      <NavigationBar />
      <Box className="progression-wrapper">
        <CertificationResult
          result={getResult()}
          accuracy={accuracy}
          wpm={wpm}
        ></CertificationResult>
      </Box>
    </>
  );
}

export default CertificationPage;
