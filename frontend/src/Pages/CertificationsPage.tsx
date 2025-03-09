import Box from '@mui/material/Box/Box';
import CertificationsMenu from '../Components/CertificationsMenu';
import NavigationBar from '../Components/NavigationBar';

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
