import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import Carousel from "react-material-ui-carousel"
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { startNewEvaluacion } from "../../../../store/evaluaciones/thunk";

import '../styles/testimonialesSlider.css';

function Item(props)
{
    return (
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
            className='testimoniales'
          >
            <h3>-{props.item.nombre}</h3>
            <p className="testimonial-texto">{props.item.comentario}</p>
            <Rating
              readonly={true}
              initialValue={props.item.rating}
            />
          </Grid>
        </Grid>
    )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '550px',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export const TestimonialesSlider = () => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleEvaluation = (e) => {
    e.preventDefault();
    handleOpenModal();
  }

  const { evaluaciones } = useSelector( state => state.evaluaciones );

  const best_evaluations = evaluaciones.filter( evaluacion => evaluacion.mostrar === true );

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
  
  const handleEvaluationSubmit = (e) => {
    e.preventDefault();
    if( nombre.trim() === '' || email.trim() === '' || rating === 0){
      handleCloseModal();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      })
      return;
    }
    try {
      dispatch(startNewEvaluacion({nombre, email, comentario, rating}));
      handleCloseModal();
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

  const handleSetEvaluation = (e) => {
    setEvaluation({
        ...evaluation,
        [e.target.name] : e.target.value
    })
}

  return (
      <div className="text-center">
        <h2>Lo que nuestros clientes dicen:</h2>
        <Carousel
          fullHeightHover={false}
          navButtonsProps={{
              style: {
                  display: 'none'
              }
          }}>
          {
            best_evaluations.map( (item, i) => <Item key={i} item={item} /> )
          }
        </Carousel>
        <Button
          onClick={handleEvaluation}
          sx={{ marginTop: '15px' }}
          variant="contained"
        >
          Enviar Evaluación
        </Button>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-edit-title"
          aria-describedby="modal-edit-description"
        >
          <Box sx={style}>
            <Typography
              id='modal-edit-title'
              variant='h6'
              justifyContent='center'
              sx={{ textAlign: 'center' }}
            >
              Crear Evaluación
            </Typography>
            <form
              id='modal-edit-description'
              sx={{ mt: 2 }}
              onSubmit={handleEvaluationSubmit}
            >
              <Grid container direction='row' alignItems='center' justifyContent='center'>
                <Grid item xs={6} sx={{ mt: 2, width:200 }}>
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
                <Grid item xs={6} sx={{ mt: 2, width:200 }}>
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
                    value={comentario}
                    onChange={handleSetEvaluation}
                    multiline
                    rows={6}
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
          </Box>
        </Modal>
      </div>
  )
}