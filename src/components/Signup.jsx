import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    emailId: '',
    contactNo: '',
    password: '',
  });

  const valueFetch = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    console.log(form);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0', // Optional: Background color for the page
      }}
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white', // White background color
          padding: '32px', // Padding inside the box
          borderRadius: '8px', // Rounded corners
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Box shadow for better visibility
          border: '1px solid grey', // Border around the box
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="column" alignItems="center">
          <TextField
            required
            id="outline-required"
            label="Required - Name"
            color="secondary"
            variant="outlined"
            name="name"
            value={form.name}
            onChange={valueFetch}
          />
          <TextField
            required
            id="outline-required"
            label="Required - Email ID"
            color="secondary"
            variant="outlined"
            name="emailId"
            value={form.emailId}
            onChange={valueFetch}
          />
          <TextField
            required
            id="outline-required"
            label="Required - Contact Number"
            color="secondary"
            variant="outlined"
            name="contactNo"
            value={form.contactNo}
            onChange={valueFetch}
          />
          <TextField
            required
            id="outline-required"
            label="Required - Password"
            color="secondary"
            variant="outlined"
            name="password"
            value={form.password}
            onChange={valueFetch}
          />
          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I hereby agree to the terms and conditions"
            />
          </FormGroup>
          <Button variant="contained" color="success" onClick={sendData}>
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Signup;
