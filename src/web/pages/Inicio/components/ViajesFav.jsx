import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import './styles/viajesFavs.css';
import CDMX from '../../../../img/CDMX3.png';
import MAZUNTE2 from '../../../../img/MAZUNTE2.png';
import SCRISTOBAL2 from '../../../../img/SCRISTOBAL2.png';

export const ViajesFav = () => {


    const CardInfo = [
        {
            title: 'Murales Urbanos',
            text: 'Ciudad de México',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: CDMX
        },
        {
            title: 'Playa Mazunte',
            text: 'Oaxaca',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: MAZUNTE2
        },
        {
            title: 'San Cristóbal de las Casas',
            text: 'Chiapas',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: SCRISTOBAL2
        }
    ]

  return (
    <section className="container anuncios mt-5">
        <h2 className="text-center mb-3">Nuestros Viajes Favoritos</h2>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignContent='center'>
            {CardInfo.map( cardItem => (
                <Grid item xs={12} sm={6} md={4} key={cardItem.title} className="card_favs">
                    <Card sx={{ maxWidth: 500}} >
                        <CardMedia
                            component='img'
                            alt={cardItem.title}
                            height='240'
                            image={cardItem.img}
                        />
                        <CardContent>
                            <Typography gutterBottom varian='h5' component='div'>
                                {cardItem.title}
                            </Typography>
                            <Typography variant='bosy2' color='text.secondary'>
                                {cardItem.text}
                            </Typography>
                        </CardContent>
                        <Button size='small'>Ver Viaje</Button>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </section>
  )
}
