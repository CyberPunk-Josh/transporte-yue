import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, ButtonGroup, Grid, IconButton, InputLabel, MenuItem, Modal, Select, TextField, Tooltip, Typography } from '@mui/material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { deleteViaje, startUpdateViaje } from '../../store/viajes/thunk';
import { useState } from 'react';

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


export const ViajesTable = () => {
  
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [viajeEdit, setViajeEdit] = useState({
    destino: '',
    personas: '',
    precio: '',
    description: '',
    urlImage: '',
  })

  const { destino, personas, precio, description, urlImage } = viajeEdit;

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const { viajes } = useSelector( state => state.viajes );
    
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
  
  const handleDeleteViaje = (viaje) => {
    Swal.fire({
      title: 'Estás seguro?',
      text: `Deseas eliminar el viaje a ${viaje.destino}?. Los datos eliminados no se podrán recuperar`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteViaje(viaje));
          Swal.fire(
            'Eliminado',
            `Tu viaje a ${viaje.destino} se ha eliminado`,
            'success'
          )
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong, please try again later',
          })
        }
      }
    })
  }

  const handleEditViaje = (viaje) => {
    handleOpenModal();
    setViajeEdit({
      id: viaje.id,
      destino: viaje.destino,
      personas: viaje.personas,
      precio: viaje.precio,
      description: viaje.description,
      urlImage: viaje.urlImage
    })
  }

  const handleSelectViaje = (e) => {
    setViajeEdit({
      ...viajeEdit,
      [e.target.name] : e.target.value
    })
  }

  const handleSaveEditViaje = (e) => {
    e.preventDefault();
    try {
      dispatch(startUpdateViaje(viajeEdit));
      Swal.fire({
        icon: 'success',
        title: 'Viaje Actualizado',
        text: `El viaje a ${viajeEdit.destino} ha sido actualizado`,
      })
      handleCloseModal();
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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Destino</TableCell>
              <TableCell align="right">Personas</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">URL Imagen</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viajes.map((viaje) => (
              <StyledTableRow key={viaje.id}>
                <StyledTableCell component='th' scope='row' >
                  {viaje.destino}
                </StyledTableCell>
                <StyledTableCell align='right'>{viaje.personas}</StyledTableCell>
                <StyledTableCell align='right'>{viaje.precio}</StyledTableCell>
                <StyledTableCell align='right'
                  sx={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    maxWidth: '200px'
                  }}
                >
                  {viaje.description}
                </StyledTableCell>
                <StyledTableCell align='right' 
                  sx={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      maxWidth: '200px'
                    }}
                >
                      {viaje.urlImage}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <ButtonGroup variant='contained' aria-label='outlined primary button group' >
                    <Tooltip title='Eliminar'>
                      <IconButton
                        onClick={ () => handleDeleteViaje(viaje) }
                      >
                        <DeleteOutline />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Editar'>
                      <IconButton
                        onClick={ () => handleEditViaje(viaje)}
                      >
                        <EditOutlined />
                      </IconButton>
                    </Tooltip>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-edit-title"
        aria-describedby="modal-edit-description"
      >
        <Box sx={style}>
              <Typography id='modal-edit-title' variant='h6' justifyContent='center'>
                Editar Viaje
              </Typography>
              <form
                id='modal-edit-description'
                sx={{ mt: 2 }}
                onSubmit={ handleSaveEditViaje }
              >
                <Grid container direction='row' alignItems='center' justifyContent='center' >
                  <Grid item xs={6} sx={{ mt:2, width:200}} >
                    <InputLabel id='personas-select-label' >Número de personas</InputLabel>
                    <Select
                      labelId='personas-select-label-edit'
                      id='personas-select-edit'
                      value={personas}
                      name='personas'
                      label='Número de personas'
                      onChange={ handleSelectViaje}
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
                      type='text'
                      placeholder='Ejem: Puerto Vallarta, Jalisco'
                      name='destino'
                      value={destino}
                      onChange={ handleSelectViaje}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ mt:2, width:200}}>
                  <TextField
                    label='Precio'
                    type="text"
                    placeholder="Ingresa el precio"
                    name='precio'
                    value={precio}
                    onChange={ handleSelectViaje}
                  />
                  </Grid>
                  <Grid item xs={6} sx={{ mt:2, width:200}}>
                    <TextField
                      label='Imagen'
                      type="text"
                      placeholder="Ingresa la url de la imagen"
                      name='urlImage'
                      value={urlImage}
                      onChange={ handleSelectViaje}
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
                      onChange={ handleSelectViaje}
                      multiline
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sx={{ mt:2}}>
                  <Button
                    variant='contained'
                    fullWidth
                    type='submit'
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ mt: 1}}
                    variant='outlined'
                    color='error'
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Grid>
              </form>
        </Box>
      </Modal>
    </>
  )
}
