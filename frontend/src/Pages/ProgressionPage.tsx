import Progression from '../Prototype-progression/Progression';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: blue,
  },
});

function ProgressionPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default ProgressionPage;
