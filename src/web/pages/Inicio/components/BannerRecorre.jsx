import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/bannerRecorre.css';

export const BannerRecorre = () => {
  return (
    <section className="encuentra mt-5">
        <Grid 
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ height: '100%'}}
        >
          <Grid item  className="container">
            <Typography variant='h3' component='div'>
              Recorre México con nosotros
            </Typography>
            <Typography variant='p' component='div'>
              Llena el formulario y un asesor se pondrá en contacto contigo
            </Typography>
            <Button
              sx={{ marginTop: '20px'}}
              variant='contained'
            >
              <Link to='/user/contacto' className='contact_link'>Contacto</Link>
            </Button>
          </Grid>
        </Grid>
    </section>
  )
}
