import React from 'react';
import {AppBar,Box,IconButton,Button,Toolbar,Typography}from '@mui/material';
import { Link } from 'react-router-dom';


const View = () =>{
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Event Management
              </Typography>
              <Link to={'/'}><Button color="inherit">Login</Button></Link>
              <Link to={'/Signup'}><Button color="inherit">Signup</Button></Link>
            </Toolbar>
          </AppBar>
        </Box>
        
    );
}

export default View