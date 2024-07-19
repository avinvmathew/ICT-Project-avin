import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'

const Login = () => {
  const sendData = () => {
    console.log(form);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction="column" alignItems="center">
        <TextField
        required
          id="outline-required"
          label="Required - Username"
          variant="outlined"
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Password"
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="success" onClick={sendData}>
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;