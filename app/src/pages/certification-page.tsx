import { Box } from '@mui/material';
import CertificationMenu from '../components/certification-menu';
import NavigationBar from '../components/navigation-bar';

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
