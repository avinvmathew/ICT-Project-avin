import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios';



export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <h1>Upcoming Events</h1>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu" 
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
          <Typography textAlign={'center'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EventHub
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    <Card sx={{ maxWidth: 300, margin: 2}}>
    <CardMedia
      sx={{ height: 100 }}
      image="/icemps.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      ICEMPS 2024
      </Typography>
      <Typography variant="body2" color="text.secondary">
      The International Conference on E-Mobility, Power Control and Smart Systems, 
      ICEMPS 2024, is a premier conference being organized as a follow up of the preceding 
      mega events of IEEE ICAGE 2014, IEEE PEDES 2016 and IEEE SPICES 2022, hosted by MBCET.
      </Typography>
    </CardContent>
    <CardActions>
  <IconButton aria-label="like">
    <ThumbUpIcon /> {/* Add the like icon */}
  </IconButton>
  <Button size="small">Learn More</Button>
</CardActions>
  </Card>

  <Card sx={{ maxWidth: 300, margin: 2 }}>
    <CardMedia
      sx={{ height: 100 }}
      image="/icemps.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      FDP on “LIDAR Applications
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Department of Civil Engineering, Mar Baselios College of Engineering and Technology, 
      is conducting a Five day Faculty Development Programme on  “LIDAR Applications in Advanced Surveying” from 8-12 January 2024
      </Typography>
    </CardContent>
    <CardActions>
  <IconButton aria-label="like">
    <ThumbUpIcon /> {/* Add the like icon */}
  </IconButton>
  <Button size="small">Learn More</Button>
</CardActions>
  </Card>

  <Card sx={{ maxWidth: 300, margin: 2}}>
    <CardMedia
      sx={{ height: 100 }}
      image="/icemps.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      ICEMPS 2024
      </Typography>
      <Typography variant="body2" color="text.secondary">
      The International Conference on E-Mobility, Power Control and Smart Systems, 
      ICEMPS 2024, is a premier conference being organized as a follow up of the preceding 
      mega events of IEEE ICAGE 2014, IEEE PEDES 2016 and IEEE SPICES 2022, hosted by MBCET.
      </Typography>
    </CardContent>
    <CardActions>
  <IconButton aria-label="like">
    <ThumbUpIcon /> {/* Add the like icon */}
  </IconButton>
  <Button size="small">Learn More</Button>
</CardActions>
  </Card>
  </Box>
  </div>
  );
}