import { AttachMoneyOutlined, GroupAddOutlined, RouteOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Modal, Typography } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { filterData } from '../../../../helpers/filterData';
import { numberWithCommas } from '../../../../helpers/numberWithCommas';
import { SearchBar } from './SearchBar';


export const SearchFilter = () => {
    const { viajes } = useSelector( state => state.viajes );

    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, viajes);

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
    <Container maxWidth='xl'>
        <h2 className='text-center'>Buscador de Viajes</h2>

        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
        >
            <Grid item sx={{marginBottom: '30px'}}>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </Grid>
        </Grid>

        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={2}
        >
            {
                dataFiltered.map( (viaje) => (
                    <Grid item md={4} key={viaje.id} className='viajes-section'>
                        <Card sx={{ maxWidth: 450}}>
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
                                <Grid
                                    container
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={ () => {
                                            handleOpen(true);
                                            setModalData(viaje);
                                        }}
                                    >
                                        Ver Viaje
                                    </Button>
                                </Grid>
                            </CardContent>
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
