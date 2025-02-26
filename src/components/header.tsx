import { useState } from 'react';
import { scroller } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ContactPhone } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

const pages = [
  { name: 'HOME', to: 'home' },
  { name: 'ABOUT', to: 'about' },
  { name: 'BLOG', to: 'blog' },
  { name: 'SERVICES', to: 'services' }
];

//mail  aahaaentertainments @gmail.com
//contact  7907723382
//insta https://www.instagram.com/aahaa_entertainments?igsh=MXd3ejR4emNlcXR2aA==

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) =>
      (event: React.MouseEvent | React.KeyboardEvent | {}) => {
        if ('key' in event && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setDrawerOpen(open);
      };

  const handleMenuItemClick = (to: string) => {
    setDrawerOpen(false); // Close the drawer
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50, // Adjust offset to align properly
    });
  };

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#09747A', top: 0 }}>
        <Toolbar sx={{ justifyContent: 'center', color: '#D1D5DB' }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 100 }} />
          </Box>

          {/* Mobile Menu Icon (Opens Side Drawer) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton size="large" aria-label="menu" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleMenuItemClick(page.to)}
                sx={{
                  color: 'white',
                  fontSize: '16px',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Side Navigation Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height: "100vh", backgroundColor: "#09747A" }} role="presentation">
          <List>
            <ListItem key={"0"}>
              <img src={logo} style={{ width: "90%" }} />
            </ListItem>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <ListItemButton onClick={() => handleMenuItemClick(page.to)}>
                  <ListItemText primary={page.name} sx={{ position: "relative", left: "30px", color: 'white' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Social Media Icons in Drawer */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <IconButton sx={{ color: 'white', fontSize: '70px' }} href="https://www.instagram.com/aahaa_entertainments?igsh=MXd3ejR4emNlcXR2aA==" target="_blank">
              <InstagramIcon sx={{ fontSize: '40px' }} />
            </IconButton>

            <IconButton sx={{ color: 'white', fontSize: '70px' }} href="tel:+917907723382" target="_blank">
              <ContactPhone sx={{ fontSize: '40px' }} />
            </IconButton>

            <IconButton sx={{ color: 'white', fontSize: '70px' }} href="mailto:aahaaentertainments@gmail.com">
              <EmailIcon sx={{ fontSize: '40px' }} />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
