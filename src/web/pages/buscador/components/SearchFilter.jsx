import { AttachMoneyOutlined, GroupAddOutlined, RouteOutlined } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { filterData } from '../../../../helpers/filterData';
import { numberWithCommas } from '../../../../helpers/numberWithCommas';
import { SearchBar } from './SearchBar';


export const SearchFilter = () => {
    const { viajes } = useSelector( state => state.viajes );

    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, viajes);


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
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Container>
  )
}
