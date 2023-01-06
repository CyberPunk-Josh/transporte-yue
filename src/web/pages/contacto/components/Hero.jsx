import React from 'react'

import '../styles/hero.css';

export const Hero = () => {
  return (
    <section className="fondo_contacto">
        <div className="contacto_info">
            <h1 className="text-uppercase nombre">Contacto</h1>
            <p className="lead">VIKA turismo y transporte</p>
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path></svg>
        <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' className="whatsapp" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
    </section>
  )
}
