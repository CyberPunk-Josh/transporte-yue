import './styles/hero.css';

export const Hero = () => {
  return (
    <section className='hero_fondo'>
      <div className='hero_container'>
        <h1>VIKA TURISMO Y TRANSPORTE</h1>
        <p>Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.</p>
      
      </div>
      <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' className="whatsapp" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </section>
  )
}
