import { Button, Container, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../../../emailjs/config';

import '../styles/formContacto.css';



export const ContactForm = () => {

    const { service_id, template_id, public_key } = emailjsConfig;

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const { nombre, email, mensaje} = values;

    const onSubmit = async (e) => {
        e.preventDefault();
        if(nombre.trim() === '' || email.trim() === '' || mensaje.trim() === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios',
            })
            return;
        }

        try {
            await emailjs.sendForm(service_id, template_id, e.target, public_key);
            Swal.fire({
                icon: 'success',
                title: 'Correo enviado',
                text: 'Tu mensaje se ha enviado correctamente',
            })
            setValues({
                nombre: '',
                email: '',
                mensaje: ''
            })
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ha ocurrido un error, por favor intentalo nuevamente',
            })
        }
    }

    const handleSetEmail = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

  return (
    <Container maxWidth='xl'>
        <h2 className='text-center'>Contacta con nosotros</h2>
        <Grid 
            container
            alignItems='center'
            justifyContent='center'
        >
            <form onSubmit={onSubmit} className='form_contacto'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField
                            label='Nombre'
                            type='text'
                            placeholder='Tu nombre'
                            fullWidth
                            autoComplete='off'
                            value={nombre}
                            onChange={handleSetEmail}
                            name='nombre'
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='Tu correo'
                            fullWidth
                            autoComplete='off'
                            value={email}
                            onChange={handleSetEmail}
                            name='email'
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt:2}}>
                        <TextField
                            sx={{ width: '100%'}}
                            label='Mensaje'
                            type='text'
                            placeholder='Escribe aqui tu mensaje'
                            autoComplete='off'
                            name='mensaje'
                            value={mensaje}
                            onChange={handleSetEmail}
                            multiline
                            rows={6}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt:2, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button
                            variant='contained'
                            sx={{ width: '35%'}}
                            type='submit'
                        >
                            Enviar
                    </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Container>
  )
}
