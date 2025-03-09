import Box from '@mui/material/Box/Box';
import NavigationBar from '../Components/NavigationBar';
import typingVideo from '../assets/home-page-animation.mp4'

function MenuPage() {
  return (
    <>
      <NavigationBar />
      <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
        <video autoPlay muted playsInline style={{ width: '100%'}}>
            <source src={typingVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </Box>
    </>
  );
}

export default MenuPage;