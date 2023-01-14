import React from 'react'
import { Helmet } from 'react-helmet';
import '../styles/buscador.css';

export const Hero = () => {
  return (
    <section className="fondo_buscador">
      <Helmet>
        <meta charset='utf8' />
        <meta name='description' content='Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.' />
        <title>Transporte YUE | Buscador</title>
      </Helmet>
        <div className="info_buscador">
            <h1 className="text-uppercase nombre text-white">VIKA Turismo y Transporte</h1>
            <p className="lead text-white px-5">Encuentra tu siguiente Destino con Nosotros</p>
            <p className="lead text-white px-4">Pregunta por nuestros descuentos y promociones para nacionales y extranjeros.</p>
        </div>
        <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' className="whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
    </section>
  )
}
