import { Box } from '@mui/material';
import CertificationMenu from '../Components/CertificationMenu';
import NavigationBar from '../Components/NavigationBar';
import { useParams } from 'react-router';

function CertificationPage() {
  const params = useParams();
  console.log(params.wpm);
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
