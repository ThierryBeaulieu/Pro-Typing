import Progression from '../Prototype-progression/Progression';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function ProgressionPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              Progression
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="progression">
        <Progression />
      </div>
    </>
  );
}

export default ProgressionPage;
