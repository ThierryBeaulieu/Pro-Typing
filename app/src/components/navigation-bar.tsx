import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { ReactNode, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import darkTheme from '../utils/dark-theme';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useNavigate } from 'react-router';

interface DrawerElement {
  label: string;
  path: string;
  icon: ReactNode;
}

const certification: DrawerElement = {
  label: 'Certifications',
  path: '/certifications',
  icon: <WorkspacePremiumIcon />,
};
const training: DrawerElement = {
  label: 'Training',
  path: '/training',
  icon: <DirectionsRunIcon />,
};
const drawerContent: DrawerElement[] = [training, certification];

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClickMainMenu = () => {
    navigate('/');
  };

  const handleClick = (link: string) => {
    navigate(link);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickMainMenu}>
            <ListItemIcon>
              <KeyboardIcon />
            </ListItemIcon>
            <ListItemText primary={'Pro Typing'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {drawerContent.map((item: DrawerElement, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleClick(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            <Typography variant="h6" color="inherit" component="div">
              Pro Typing
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mt: 8 }}></Box>
    </ThemeProvider>
  );
}

export default NavigationBar;
