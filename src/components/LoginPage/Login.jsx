import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
  const sendData = () => {
    console.log('Send data');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: '#f0f0f0', // Optional: Background color for the page
      }}
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'white', // White background color
          padding: '32px', // Padding inside the box
          borderRadius: '8px', // Rounded corners
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Box shadow for better visibility
          border: '1px solid grey', // Border around the box,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="column" alignItems="center">
          <TextField
            required
            id="outline-required"
            label="Required - Username"
            color="success"
            variant="outlined"
          />
          <TextField
            required
            id="outline-required"
            label="Required - Password"
            color="success"
            variant="outlined"
            type="password"
          />
          <Button variant="contained" color="success" onClick={sendData}>
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;