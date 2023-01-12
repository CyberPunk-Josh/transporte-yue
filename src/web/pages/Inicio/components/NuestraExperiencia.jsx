import { Grid, Typography } from '@mui/material'

import '../styles/nuestraEXperiencia.css';

import yue from '../../../../img/yue.webp';
import chichen2 from '../../../../img/chichen2.webp';
import { TestimonialesSlider } from './TestimonialesSlider';

export const NuestraExperiencia = () => {
  return (
    <section className="container mt-5">
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columns={{ xs: 4, sm: 8, md: 12 }}
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
                    sx={{ width: '80%', marginTop: '20px' }}
                >
                    <Grid
                        item
                        xs={5} sm={4} md={4}
                        className='text-center'
                    >
                        <img src={yue} alt="logo empresa" className="exp_img" />
                    </Grid>
                    <Grid
                        item
                        xs={7} sm={4} md={4}
                        className='text-center'
                    >
                        <Typography variant='h3' component='div' className='entrada' >
                            Empresa 100% Mexicana
                        </Typography>
                        <Typography variant='p' component='div' sx={{marginTop: '15px'}}>
                            Conoce nuestra historia
                        </Typography>
                        <Typography variant='p' component='div'>
                            Las mejores experiencias en recorridos y transportación terrestre en toda la Ciudad de México y república mexicana con VIKA, turismo y transporte.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    sx={{ width: '80%', marginTop: '20px' }}
                >
                    <Grid
                        item
                        xs={7}
                        className='text-center'
                    >
                        <Typography variant='h3' component='div' className='entrada'>
                            1000+ viajes
                        </Typography>
                        <Typography variant='p' component='div' sx={{marginTop: '15px'}}>
                            Conoce nuestras rutas...
                        </Typography>
                        <Typography variant='p' component='div'>
                            Pregunta por nuestros descuentos y promociones para nacionales y extranjeros.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        className='text-center'
                    >
                        <img src={chichen2} alt="chichen Itza" className="exp_img"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={4}
            >
                <TestimonialesSlider />
            </Grid>
        </Grid>
    </section>
  )
}
