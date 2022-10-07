import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonGroup, IconButton, Tooltip } from '@mui/material';
import { DeleteOutline, EditOutlined, VisibilityOutlined } from '@mui/icons-material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export const ViajesTable = () => {

  const dispatch = useDispatch();

  const { viajes } = useSelector( state => state.viajes );

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
  

  return (
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
              <StyledTableCell align='right'>{viaje.descripcion}</StyledTableCell>
              <StyledTableCell align='right'>{viaje.url_imagen}</StyledTableCell>
              <StyledTableCell align='right'>
                <ButtonGroup variant='contained' aria-label='outlined primary button group' >
                  <Tooltip title='Eliminar'>
                    <IconButton>
                      <DeleteOutline />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Editar'>
                    <IconButton>
                      <EditOutlined />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Ver'>
                    <IconButton>
                      <VisibilityOutlined />
                    </IconButton>
                  </Tooltip>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
