import { Container, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AcordionInfo = () => {
  return (
    <Container maxWidth='xl'>
        <Grid
            container
            spacing={2}
            direction='row'
            justifyContent='space-around'
            alignItems='center'
        >
            <Grid item xs={6}>
            <Accordion expanded={true}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography>PASEOS CULTURALES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nuestros servicios están basados en las necesidades de nuestros clientes administrando  su tiempo para su máximo provecho, contamos con un amplio cátalo de posibilidades para visitar, nadar, conocer, degustar, comprar, entre otras muchas actividades atractivas para nuestros visitantes, pregunta via Whatsapp o Facebook para un servicio más personalizado. Ofrecemos visitas programadas en todos los museos de la Ciudad de México y área metropolitana. Este servicio consta de recorrido en auto hasta el lugar y caminatas culturales, dependiendo del paseo serán proporcionadas las entradas a zonas arqueológicas, museos nacionales y populares de los sitios o avistamiento de edificios de alta importancia arquitectónica o histórica.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                <Typography>TRASLADOS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Ofrecemos soluciones de transportación ya sea desde 1 hasta 20 personas, según sea el requerimiento, tenemos el auto ideal para ti. O bien si lo deseas, tenemos capacidad de transporte en distintos autos hasta 80 personas. Ya sea por concepto de horas o por día. Con la mejor experiencia en atención e higiene antes y después de tiempos de COVID-19, con control del detalle más pequeño,  manteniendo en todo momento la comodidad y tranquilidad de nuestros clientes. Este servicio es únicamente el traslado de un punto de la ciudad de México, a cualquier otro dentro de ella o de la república mexicana.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                <Typography>TRANSPORTACION DE NEGOCIOS O PLACER</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El servicio consta de tiempo de espera en donde se sigue el itinerario de actividades del cliente, es decir transporte reuniones de negocios u otros eventos donde puede ser de 4hrs en adelante e incluso días de transporte con jornadas de 8hrs por día.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </Grid>
    </Container>
  )
}
