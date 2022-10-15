import { Grid, Typography } from '@mui/material'

import '../styles/nuestraEXperiencia.css';

import yue from '../../../../img/yue.webp';

export const NuestraExperiencia = () => {
  return (
    <section className="container mt-5">
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                item
                xs={8}
            >
                <Typography variant='h2' component='div' className='text-center'>
                    Nuestra Experiencia
                </Typography>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid
                    item
                    xs={5}
                    className='text-center'
                >
                    <img src={yue} alt="logo empresa" className="exp_img" />
                </Grid>
                <Grid
                    item
                    xs={7}
                    className='text-center'
                >
                    <Typography variant='h3' component='div'>
                        Empresa 100% Mexicana
                    </Typography>
                    <Typography variant='p' component='div'>
                        Conoce nuestra historia
                    </Typography>
                    <Typography variant='p' component='div'>
                        Las mejores experiencias en recorridos y transportación terrestre en toda la Ciudad de México y república mexicana con VIKA, turismo y transporte.
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={4}
            >
                <p>WORLD</p>
            </Grid>
        </Grid>
    </section>
  )
}
