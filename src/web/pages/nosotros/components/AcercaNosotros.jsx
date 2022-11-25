import { Container, Grid } from '@mui/material';
import React from 'react';

import '../styles/acercaNosotros.css';
import yue_logo from '../../../../img/yue.webp';

export const AcercaNosotros = () => {
  return (
    <Container maxWidth='xl'>
        <h2 className='titulo_nosotros'>ACERCA DE NOSOTROS</h2>
        <Grid 
            container 
            spacing={2}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
        >
            <Grid item xs={6} className='nosotros_info mt-5'>
                <img src={yue_logo} alt="logo transporte YUE"/>
            </Grid>
            <Grid item xs={6} className='nosotros_info mt-5'>
                <p>Somos una empresa 100% mexicana con 20 años de experiencia en trasportación de personas en viajes de placer o negocios y dar recorridos turísticos o paseos culturales en toda la república Mexicana, ofreciendo gran variedad de lugares representativos de nuestro México con autos de alta gamma con los mejores Guías de turistas certificados ante la secretaria de turismo y choferes capacitados en los siguientes idiomas: inglés, francés, alemán, portugués y español. VIKA turismo y transporte diseña y construye el recorrido e itinerario de acuerdo a tus necesidades ya que contamos con autos y camionetas con capacidad de hasta 20 personas según sea tu requerimiento con la calidez y amabilidad de una familia Mexicana.</p>
            </Grid>
        </Grid>
    </Container>
  )
}
