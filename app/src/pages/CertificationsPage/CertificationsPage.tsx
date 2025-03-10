import Box from '@mui/material/Box/Box';
import CertificationsContent from './CertificationsContent';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function CertificationsPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression-wrapper">
        <CertificationsContent />
      </Box>
    </>
  );
}

export default CertificationsPage;
