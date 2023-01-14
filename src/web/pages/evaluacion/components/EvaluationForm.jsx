import { Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Rating } from "react-simple-star-rating";
import Swal from 'sweetalert2';
import { startNewEvaluacion } from '../../../../store/evaluaciones/thunk';


import '../styles/evaluationForm.css';

export const EvaluationForm = () => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0)
  const [evaluation, setEvaluation] = useState({
    nombre: '',
    email: '',
    comentario: '',
  })

  const { nombre, email, comentario } = evaluation;

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  }

  const handleSetEvaluation = (e) => {
    setEvaluation({
        ...evaluation,
        [e.target.name] : e.target.value
        })
    }

  const handleEvaluationSubmit = (e) => {
        e.preventDefault();
        if( nombre.trim() === '' || email.trim() === '' || rating === 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
          })
          return;
        }
        try {
          dispatch(startNewEvaluacion({nombre, email, comentario, rating}));
          setEvaluation({
            nombre: '',
            email: '',
            comentario: '',
          })
          setRating(0)
          Swal.fire({
            icon: 'success',
            title: 'Evaluación enviada',
            text: 'Gracias por evaluar nuestro servicio',
          })
        } catch (error) {
          console.log(error);
        }
    }

  return (
    <Grid container direction='column' alignItems='center' justifyContent='center'>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
                variant='h3'
                justifyContent='center'
                sx={{ textAlign: 'center', marginTop: '3rem' }}
            >
                Tu oponión es importante, envíanos tu evaluación
            </Typography>
          </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <form
                id='modal-edit-description'
                sx={{ mt: 5 }}
                className='form'
                onSubmit={handleEvaluationSubmit}
                xs={2} sm={4} md={4}
              >
                <Grid container direction='row' alignItems='center' justifyContent='center'>
                  <Grid item xs={12} sx={{ mt: 2, width:200 }}>
                    <TextField
                      label='Nombre'
                      type='text'
                      placeholder='Tu nombre'
                      name='nombre'
                      autoComplete='off'
                      value={nombre}
                      onChange={handleSetEvaluation}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2, width:200 }}>
                    <TextField
                      label='Email'
                      type='text'
                      placeholder='Tu email'
                      name='email'
                      autoComplete='off'
                      value={email}
                      onChange={handleSetEvaluation}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2, width:200 }}>
                    <TextField
                      sx={{ width: '100%'}}
                      label='Tu comentario'
                      type="text"
                      placeholder="Escribe aqui tu comentario"
                      name='comentario'
                      autoComplete='off'
                      multiline
                      rows={6}
                      value={comentario}
                      onChange={handleSetEvaluation}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2, width:200, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <h3>Tu Calificación:</h3>
                    <Rating
                      onClick={ handleRating }
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt:2}}>
                    <Button
                      variant='contained'
                      fullWidth
                      type='submit'
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
    </Grid>
  )
}
