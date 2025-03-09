import Box from '@mui/material/Box/Box';
import CertificationsMenu from '../components/CertificationsMenu';
import NavigationBar from '../components/NavigationBar';

function CertificationsPage() {
  return (
    <>
      <NavigationBar name={'Certifications'} />
      <Box className="progression-wrapper">
        <CertificationsMenu />
      </Box>
    </>
  );
}

export default CertificationsPage;
