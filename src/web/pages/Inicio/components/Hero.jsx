import '../styles/hero.css';
import {Helmet} from "react-helmet";
import 'animate.css';


export const Hero = () => {
  return (
    <section className='hero_fondo'>
      <Helmet>
        <meta charset='utf8' />
        <meta name='description' content='Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.' />
        <title>Transporte YUE | Inicio</title>
      </Helmet>
      <div className='hero_container animate__animated animate__backInDown'>
        <h1>VIKA TURISMO Y TRANSPORTE</h1>
        <p>Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.</p>
        <p>Pregunta por nuestros descuentos y promociones para nacionales y extranjeros</p>
      
      </div>
      <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' className="whatsapp animate__animated  animate__rubberBand" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </section>
  )
}
