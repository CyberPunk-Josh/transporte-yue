import { Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css';

export const Footer = () => {
  return (
    <section className='footer'>
        <Container maxWidth='xl'>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                <Grid item xs={12} md={4} sm={4} sx={{ maxHeight: '200px', height: '200px' }}>
                    <Grid container direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                    >
                        <Grid item>
                            <h3>Links</h3>
                        </Grid>
                        <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Link to='/user/inicio'>INICIO</Link>
                            <Link to='/user/nosotros'>NOSOTROS</Link>
                            <Link to='/user/contacto'>CONTACTO</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} sm={4} sx={{ maxHeight: '200px', height: '200px'}}>
                    <Grid
                    container direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                        <Grid item>
                        <h3>Visitanos</h3>
                        </Grid>
                        <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <div className="wrapper">
                                <div className="button">
                                    <div className="icon">
                                        <i className="fab fa-facebook-square"></i>
                                    </div>
                                    <a href="https://www.facebook.com/VIKA-turismo-y-transporte-102375181811166" target="blank">
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  maxHeight: '200px', height: '200px'}}>
                    <p className="copyright text-light text-center footer-yue">
                        &copy; 2023 <span>Tranporte Yue</span>. Todos los derechos reservados
                    </p>
                </Grid>
            </Grid>
        </Container>
    </section>
  )
}
