import { Grid } from '@mui/material';

import './styles/sobreNosotros.css';
import icono_seguridad from '../../../../img/icono_seguridad.webp';
import icono_disponible from '../../../../img/icono_disponible.webp';
import icono_precio from '../../../../img/icono_precio.webp';

export const SobreNosotros = () => {
  return (
    <section className="container sobre-nosotros mt-5">
        <h2 className="text-center">Más sobre Nosotros</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={4} md={4} className="text-center">
                <img src={icono_seguridad} alt="icono seguridad" />
                <h3 className='mb-3 text-uppercase'>Seguridad</h3>
                <p>VIKA turismo y transporte tenemos presente que la seguridad es uno de los aspectos más importantes en el viaje, por eso te ofrecemos seguro de gastos a terceros, autos en excelentes condiciones así como personal capacitado en conducción automovilística.</p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className="text-center">
                <img src={icono_disponible} alt="icono seguridad" />
                <h3 className='mb-3 text-uppercase'>Seguridad</h3>
                <p>Tenemos servicio las 24hrs los 365 días del año. Comunícate con nosotros, obtén informes y haz tu reservación. </p>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className="text-center">
                <img src={icono_precio} alt="icono seguridad" />
                <h3 className='mb-3 text-uppercase'>Seguridad</h3>
                <p>Nuestros precios están basados en estándares de hoteles catalogados 5 diamantes por lo que la higiene, comodidad y discreción son puntos  inquebrantables para que tu y tus acompañantes se sientan como en casa.</p>
            </Grid>
        </Grid>
    </section>
  )
}
