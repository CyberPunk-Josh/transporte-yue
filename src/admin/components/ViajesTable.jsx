import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, ButtonGroup, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { deleteViaje } from '../../store/viajes/thunk';
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
    descripcion: '',
    url: '',
  })

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
      destino: viaje.destino,
      personas: viaje.personas,
      precio: viaje.precio,
      descripcion: viaje.description,
      url: viaje.urlImage
    })
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
                <StyledTableCell align='right'>{viaje.description}</StyledTableCell>
                <StyledTableCell align='right'>{viaje.urlImage}</StyledTableCell>
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
        </Box>
      </Modal>
    </>
  )
}
