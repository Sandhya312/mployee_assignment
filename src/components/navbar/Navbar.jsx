import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Button,
  Avatar,

} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import avatar from '../../assets/avatar.svg';
import logo from '../../assets/logo.png';


const Navbar = () => {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  // eslint-disable-next-line no-unused-vars
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorElUser, setAnchorElUser] =useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed"  component="nav" sx={{
        backgroundColor:"white",
        color:"black !important"
    }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
       <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <img src={logo} />
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button sx={{   backgroundColor:"white",
        color:"black !important" }}>Resume Scan</Button>

          <Button sx={{   backgroundColor:"white",
        color:"black !important" }}>Resume Keywords</Button>

          <Button sx={{   backgroundColor:"white",
        color:"black !important" }}>Resume Services</Button>

          <Button sx={{   backgroundColor:"white",
        color:"black !important" }}>Career blogs</Button>

          <Button sx={{   backgroundColor:"white",
        color:"black !important" }}>About Us</Button>

          <Button sx={{   backgroundColor:"white",
        color:"black !important"}}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={avatar} />
                  <Typography ml={1} component="p" color={"black"} >Divyance</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
