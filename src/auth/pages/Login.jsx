import { useState } from 'react';
import {Button, Grid, TextField} from '@mui/material'
import { useDispatch } from 'react-redux';

import './login.css';
import logo_web from '../../img/yue.webp';
import { startLoginWithEmailAndPassword } from '../../store/auth/thunks';
import Swal from 'sweetalert2';

export const Login = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const onInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLoginubmit = (e) => {
    e.preventDefault();
    try {
      dispatch( startLoginWithEmailAndPassword({ email, password}));
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, please try again later',
      })
    }
  }

  return (
    <section className='login'>
      <div className='card_login'>
        <h3>Welcome Back Karina</h3>
        <p>Hey, Enter your details to get sign in into your account</p>
        <form onSubmit={handleLoginubmit}>
          <Grid container className='container_form'>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField
                label='Email'
                type='email'
                placeholder='Type here your email'
                fullWidth
                autoComplete="off"
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2}}>
              <TextField
                label='Password'
                type='password'
                placeholder='Type here your password'
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant='contained'
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant='outlined'
                  fullWidth
                  href='/user/inicio'
                >
                  Home Page
                </Button>
              </Grid>
            </Grid>
            <Grid container sx={{ mb:1, mt:2 }} >
              <Grid item xs={ 12 } sm={ 12 } className='container_logo'>
                <img src={ logo_web } alt="Logo transporte Yue"  className="img_logo_login"/>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </section>
  )
}
