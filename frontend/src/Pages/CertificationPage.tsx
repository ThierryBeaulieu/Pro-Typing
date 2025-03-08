import { Box } from '@mui/material';
import CertificationMenu from '../Components/CertificationMenu';
import NavigationBar from '../Components/NavigationBar';

function CertificationPage() {
  return (
    <>
      <NavigationBar name={`Certification`} />
      <Box className="progression-wrapper">
        <CertificationMenu />
      </Box>
    </>
  );
}

export default CertificationPage;
