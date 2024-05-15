

import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Box, Typography} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import upgrade from '../../assets/updrade.png';
const drawerWidth = 280;



  export  function CustomizedMenus() {
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
     
             <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          Saved Jobs
        </Button>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <MenuItem onClick={handleClose} disableRipple>
          UI/UX Designer
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
          Web Developer
          </MenuItem>
        
          <MenuItem onClick={handleClose} disableRipple>
          Analyst
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
          Lorem Ipsum
          </MenuItem>
          </Menu>
      </div>
    );
  }


const Sidebar = () =>{


   

    return (
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
         
          [`& .MuiDrawer-paper`]: {  top:"64px !important",width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
       
        <Box sx={{ overflow: 'auto' }}>
          <List>
           
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Job Recommendation Tool" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="History" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary={<CustomizedMenus />} />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Plans (Current: Free)" />
                </ListItemButton>

                </ListItem>

               <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Manage Profiles" />
                </ListItemButton>


              </ListItem>
           
          </List>
          
        </Box>

        <Box position={'fixed'} sx={{ pb:2, bottom:"0", width:drawerWidth, overflow: 'auto' }}>
     
          <Typography component={"p"}>Help & Support</Typography>
          <List>
           
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <InboxIcon /> 
                  </ListItemIcon>
                  <ListItemText primary="Help Center" />
                </ListItemButton>
                </ListItem>

           
          </List>

          <Box component="section" sx={{ p:1, m:2, border: '1px dashed grey' }}>
            <Typography component={"p"}>Current Plan:   Free</Typography>
          </Box>


          <Box component="section" sx={{ p: 2 }}>
            <img src = {upgrade} />
          </Box>

        </Box>
      </Drawer>
    )
}

export default Sidebar;