import { AttachMoneyOutlined, GroupAddOutlined, RouteOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMultipleRandom } from '../../../../helpers/getMultipleRandom';
import { numberWithCommas } from '../../../../helpers/numberWithCommas';

import '../styles/viajesfav.css';

export const ViajesFav = () => {

    const { viajes } = useSelector( state => state.viajes );

    const randomViajes = getMultipleRandom(viajes, 9);
    

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modalData, setModalData] = useState('');

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
    <Container maxWidth='xl' className='viajes-fav'>
        <h2>Nuestros Viajes Favoritos</h2>
        <Grid 
            container
            direction='row'
            justifyContent='center'
            alignItems='center' 
            spacing={2}
        >
            {
                randomViajes.map((viaje) => (
                    <Grid item md={4} key={viaje.id} className='viajes-section'>
                        <Card sx={{ maxWidth: 450}} >
                            <CardMedia
                                component='img'
                                height='200'
                                image={viaje.urlImage}
                                alt={viaje.description}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {viaje.destino}
                                </Typography>
                                <div className='viaje-desc'>
                                    <Typography variant='h3' component='div' className='viajes-personas'>
                                        <GroupAddOutlined />
                                        <p>{viaje.personas}</p>
                                    </Typography>
                                    <Typography variant='h3' component='div' className='viajes-price'>
                                        <AttachMoneyOutlined />
                                        <p>{numberWithCommas(viaje.precio)}</p>
                                    </Typography>
                                    <Typography variant='h3' component='div' className='viajes-tour'>
                                        <RouteOutlined />
                                        <p>Tour</p>
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Button 
                                    size="small" 
                                    variant="outlined"
                                    onClick={ () => {
                                        handleOpen(true);
                                        setModalData(viaje);
                                    }}
                                >
                                    Ver Viaje
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant='h6' component='h2' className='text-center'>
                    {modalData.destino}
                </Typography>
                <Container xs={{ width: '180px'}}>
                    <img src={modalData.urlImage} alt={modalData.destino} style={{ maxWidth: '100%' }} />
                </Container>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    { modalData.description }
                </Typography>
            </Box>
        </Modal>
    </Container>
  )
}
