import { Container, Grid } from '@mui/material'

import '../styles/viajesCalc.css';
import calc from '../../../../img/calc.svg';

export const ViajesCal = () => {
  return (
    <Container maxWidth='xl'>
        <h2 className='text-center'>Nuestros Precios de Calculan en Base a:</h2>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <ul className="viajes-list-info">
                    <li className="nav-item mb-3">Numero de Personas</li>
                    <i className="fas fa-users mb-5 "></i>
                    <li className="nav-item mb-3">Lugar de Origen</li>
                    <i className="fas fa-map-marker-alt mb-5 "></i>
                    <li className="nav-item mb-3">Lugar de Destino</li>
                    <i className="fas fa-car-side mb-5 "></i>
                    <li className="nav-item mb-3">Tour o Transfer</li>
                    <i className="fas fa-route"></i>
                </ul>
            </Grid>
            <Grid item md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={calc} alt="calculo de precios" className='img-precios'/>
            </Grid>
        </Grid>
    </Container>
  )
}
