import { useState } from 'react'
import { AddCircle } from '@mui/icons-material'
import { Box, Button, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import { AdminLayout } from '../layout/AdminLayout'
import { ViajesTable } from '../components/ViajesTable'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { startNewViaje } from '../../store/viajes/thunk'

export const Viajes = () => {

  const dispatch = useDispatch();

  /* Modal features */
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  }

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [viajes, setViajes] = useState({
    personas: '',
    destino: '',
    precio: '',
    urlImage: '',
    description: ''
  })

  const { personas, destino, precio, urlImage, description } = viajes;

  const handleSelectViaje = (e) => {
    setViajes({
      ...viajes,
      [e.target.name] : e.target.value
    })
  }

  const handleCreateViaje = (e) => {
    e.preventDefault();
    if(personas.trim() === '' || destino.trim() === '' || precio.trim() === '' || urlImage.trim() === '' || description.trim() === '') {
      handleCloseModal();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios'
      })
      return;
    }
    try {
      dispatch(startNewViaje({personas, destino, precio, urlImage, description}));
      handleCloseModal();
      setViajes({
        personas: '',
        destino: '',
        precio: '',
        urlImage: '',
        description: ''
      })
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Tu nuevo viaje a sido creado exitosamente',
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong, please try again later',
      })
    }
  }

  return (
    <AdminLayout>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item >
          <Typography variant='h3' component='div' sx={{ marginBottom: '10px'}}>
            Viajes
          </Typography>
        </Grid>
        <Grid item >
          <Button
            variant='outlined'
            endIcon={<AddCircle/>}
            onClick={handleOpenModal}
          >
            Crear
          </Button>
        </Grid>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h4' justifyContent='center' sx={{textAlign:'center'}}>
              Crea un nuevo viaje
            </Typography>
            <form
              onSubmit={handleCreateViaje}
              id='modal-modal-description'
              sx={{ mt: 2}}
            >
              <Grid container direction='row' alignItems='center' justifyContent='center'>
                <Grid item xs={6} sx={{ mt:2, width:200}}>
                  <InputLabel id='personas-select-label'>Número de personas</InputLabel>
                  <Select
                    labelId='personas-select-label'
                    id='personas-select'
                    value={personas}
                    name='personas'
                    label='Número de personas'
                    onChange={handleSelectViaje}
                  >
                    <MenuItem value='1-4'>1-4</MenuItem>
                    <MenuItem value='5-7'>5-7</MenuItem>
                    <MenuItem value='8-14'>8-14</MenuItem>
                    <MenuItem value='15-20'>15-20</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6} sx={{ mt:2, width:200}}>
                  <TextField
                    label='Destino'
                    type="text"
                    placeholder="Ejem: Puerto Vallarta, Jalisco"
                    name='destino'
                    value={destino}
                    onChange={handleSelectViaje}
                    autoComplete='off'
                  />
                </Grid>
                <Grid item xs={6} sx={{ mt:2, width:200}}>
                  <TextField
                    label='Precio'
                    type="text"
                    placeholder="Ingresa el precio"
                    name='precio'
                    value={precio}
                    onChange={handleSelectViaje}
                    autoComplete='off'
                  />
                </Grid>
                <Grid item xs={6} sx={{ mt:2, width:200}}>
                  <TextField
                    label='Imagen'
                    type="text"
                    placeholder="Ingresa la url de la imagen"
                    name='urlImage'
                    value={urlImage}
                    onChange={handleSelectViaje}
                    autoComplete='off'
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt:2}} >
                  <TextField
                    sx={{ width: '100%'}}
                    label='Descripción'
                    type="text"
                    placeholder="Descripción del viaje"
                    name='description'
                    value={description}
                    onChange={handleSelectViaje}
                    autoComplete='off'
                    multiline
                    rows={6}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2}}>
                  <Button
                    variant='contained' 
                    fullWidth
                    type='submit'
                  >
                    Crear
                  </Button>  
                  <Button
                    sx={{ mt: 1}}
                    variant="outlined" 
                    color="error"
                    fullWidth
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </Button>
              </Grid>
              </Grid>
            </form>
          </Box>
        </Modal>
      </Grid>
      <ViajesTable/>
    </AdminLayout>
  )
}
