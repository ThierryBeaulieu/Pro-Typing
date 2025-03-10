import { Box } from '@mui/material';
import CertificationMenu from './CertificationPageContent';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

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
