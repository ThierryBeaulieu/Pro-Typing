import Box from '@mui/material/Box/Box';
import CertificationsMenu from '../components/certifications-menu';
import NavigationBar from '../components/navigation-bar';

function CertificationsPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression-wrapper">
        <CertificationsMenu />
      </Box>
    </>
  );
}

export default CertificationsPage;
