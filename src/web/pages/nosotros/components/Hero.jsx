import React from 'react';
import { Helmet } from 'react-helmet';

import '../styles/hero.css';

export const Hero = () => {
  return (
    <section className="hero_nosotros">
      <Helmet>
        <meta charset='utf8' />
        <meta name='description' content='Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.' />
        <title>Transporte YUE | Nosotros</title>
      </Helmet>
        <div className="header_nosotros">
            <h1 className="nombre">Acerca de Nosotros</h1>
            <p className="lead">VIKA turismo y transporte</p>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path></svg>
        <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20"      title='WhatsApp  Yue' className="whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
    </section>
  )
}
