import { ButtonGroup, IconButton, Paper, Switch, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { DeleteOutline} from '@mui/icons-material';
import { deleteEvaluacion, startUpdateEvaluacion } from '../../store/evaluaciones/thunk';
import Swal from 'sweetalert2';



export const EvaluacionesTable = () => {

    const dispatch = useDispatch();

    const { evaluaciones } = useSelector( state => state.evaluaciones );

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

    // estado de la evaluacion
    const [evaluacionMostrar, setEvaluacionMostrar] = useState(true);
    const [evaluacionOcultar, setEvaluacionOcultar] = useState(false);

    const handleChangeMostrar = (evaluacion) => {
        if (evaluacion.mostrar) {
            dispatch(startUpdateEvaluacion(evaluacion))
            setEvaluacionOcultar(!evaluacion.mostrar)
            return;
        }

        dispatch(startUpdateEvaluacion(evaluacion))
        setEvaluacionMostrar(evaluacion.mostrar)
    };

    const handleChangeOcultar = (evaluacion) => {
        if (evaluacion.mostrar) {
            dispatch(startUpdateEvaluacion(evaluacion))
            setEvaluacionOcultar(!evaluacion.mostrar)
            return;
        }

        dispatch(startUpdateEvaluacion(evaluacion))
        setEvaluacionMostrar(evaluacion.mostrar)
    };

    const handleDeleteEvaluacion = (evaluacion) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: `Deseas eliminar la evaluación de ${evaluacion.nombre}?. Los datos eliminados no se podrán recuperar`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              try {
                dispatch(deleteEvaluacion(evaluacion));
                Swal.fire(
                  'Eliminado',
                  `La evaluación de ${evaluacion.nombre} se ha eliminado`,
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
    

  return (
    <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Comentario</TableCell>
                        <TableCell align="right">Rating</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        evaluaciones.map(( evaluacion) => (
                            <StyledTableRow key={evaluacion.id}>
                                <StyledTableCell component='th' scope='row' >
                                    {evaluacion.nombre}
                                </StyledTableCell>
                                <StyledTableCell align='right'>{evaluacion.email}</StyledTableCell>
                                <StyledTableCell align='right'>{evaluacion.comentario}</StyledTableCell>
                                <StyledTableCell align='right'>{evaluacion.rating}</StyledTableCell>
                                <StyledTableCell align='center'>
                                    <ButtonGroup variant='contained' aria-label='outlined primary button group' >
                                    <Tooltip title='Eliminar'>
                                        <IconButton
                                            onClick={ () => handleDeleteEvaluacion(evaluacion) }
                                        >
                                            <DeleteOutline />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title='Mostrar/Ocultar'>
                                        <Switch
                                            defaultChecked={
                                                evaluacion.mostrar
                                            }
                                            onChange={
                                                evaluacion.mostrar ? 
                                                    (
                                                        (e) => handleChangeOcultar(evaluacion, e)
                                                    ) : 
                                                    (
                                                        (e) => handleChangeMostrar(evaluacion, e)
                                                    )
                                            }
                                        />
                                    </Tooltip>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>
  )
}
