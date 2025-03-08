import { Box } from '@mui/material';
import CertificationMenu from '../components/CertificationMenu';
import NavigationBar from '../components/NavigationBar';

function CertificationPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression-wrapper">
        <CertificationMenu />
      </Box>
    </>
  );
}

export default CertificationPage;
