import { Box } from '@mui/material';
import CertificationMenu from '../Components/CertificationMenu';
import NavigationBar from '../Components/NavigationBar';
import { useParams } from 'react-router-dom';

function CertificationPage() {
  const { wpm } = useParams();

  return (
    <>
      <NavigationBar name={`Certification ${wpm}`} />
      <Box className="progression-wrapper">
        <CertificationMenu />
      </Box>
    </>
  );
}

export default CertificationPage;
