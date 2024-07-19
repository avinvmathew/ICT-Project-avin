import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    emailId: '',
    contactNo: '',
    password:'',
  });

  function valueFetch(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
          label="Required - Name"
          variant="outlined"
          name="name"
          value={form.name}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Email ID"
          variant="outlined"
          name="emailId"
          value={form.emailId}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Contact Number"
          variant="outlined"
          name="contactNo"
          value={form.contactNo}
          onChange={valueFetch}
        />
        <br />
        <TextField
        required
          id="outline-required"
          label="Required - Password"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={valueFetch}
        />
        <br />
        <FormGroup>
            <FormControlLabel required control={<Checkbox />} label="I hereby agree to the terms and conditions" />
        </FormGroup>
        <Button variant="contained" color="success" onClick={sendData}>
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default Signup;