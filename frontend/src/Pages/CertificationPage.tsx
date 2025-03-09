import { Box } from '@mui/material';
import CertificationMenu from '../Components/CertificationMenu';
import NavigationBar from '../Components/NavigationBar';

function CertificationPage() {
  return (
    <>
      <NavigationBar />
      <Box className="progression-wrapper">
        <CertificationMenu></CertificationMenu>
      </Box>
    </>
  );
}

export default CertificationPage;
