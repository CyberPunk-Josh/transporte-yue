import { useState } from 'react';

import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Modal, Typography } from '@mui/material';

import '../styles/viajesFavs.css';
import CDMX from '../../../../img/CDMX3.png';
import MAZUNTE2 from '../../../../img/MAZUNTE2.png';
import SCRISTOBAL2 from '../../../../img/SCRISTOBAL2.png';

export const ViajesFav = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalData, setModalData] = useState('');


    const CardInfo = [
        {
            title: 'San Cristóbal de las Casas',
            text: 'Chiapas',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: SCRISTOBAL2,
            desc: 'San Cristóbal de las Casas es una ciudad en la zona alta del estado de Chiapas al sur de México. Es conocida por su arquitectura colonial bien conservada, como la Catedral de San Cristóbal de color amarillo y con siglos de antigüedad ubicada en el Parque Central. El Museo de Los Altos, en el antiguo convento barroco Santo Domingo de Guzmán, tiene exhibiciones de tejidos e historia regional. Fuera del edificio hay un mercado donde se venden tejidos coloridos y otras artesanías.'
        },
        {
            title: 'Murales Urbanos',
            text: 'Ciudad de México',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: CDMX,
            desc: 'Estos Murales los puedes encontrar en distintos puntos de la Ciudad de México, algunos en lugares recónditos, otros a la vista de gran cantidad de personas, muchos de ellos tienen que ver con la cultura y tradiciones prehispánicas y actuales que seguimos las familias Mexicanas, animales considerados sagrados o grandes héroes revolucionarios sin dejar afuera muchos otros temas libres.'
        },
        {
            title: 'Playa Mazunte',
            text: 'Oaxaca',
            users: 3,
            cost: 200,
            route: 'Tour',
            img: MAZUNTE2,
            desc: 'Esta playa situada en la costa del Océano Pacífico del estado de Oaxaca al sureste de México, a 264 km de la capital oaxaqueña. Mazunte en dialecto náhuatl significa “déjame verte desovar”, y esto se refiere a que en las playas de este sitio da lugar a la anidación de las tortugas marinas, desde 1960 las playas de Mazunte son visitadas por cientos de tortugas de la especie Golfina que desovaba por las noches en ciertas etapas lunares. Así como esta hermosa playa hay otras bastante interesantes donde puedes convivir con los animales marinos!'
        }
    ]

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <section className="container anuncios mt-5">
        <h2 className="text-center mb-5">Nuestros Viajes Favoritos</h2>
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
                        <Grid container alignItems='center' justifyContent='center' sx={{ marginBottom: '10px' }}>
                            <Button 
                                size='medium' 
                                variant='contained' 
                                onClick={ () => {
                                    handleOpen(true);
                                    setModalData(cardItem);
                                }}
                            >
                                Ver Viaje
                            </Button>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center">
                    { modalData.title }
                </Typography>
                <Container xs={{ width: '180px'}}>
                    <img src={modalData.img} alt={modalData.title} style={{ maxWidth: '100%' }} />
                </Container>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    { modalData.desc }
                </Typography>
            </Box>
        </Modal> 
    </section>
  )
}
