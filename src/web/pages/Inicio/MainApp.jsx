import { Fragment } from 'react'

import { Nav } from '../../layout/Nav';
import { BannerRecorre } from './components/BannerRecorre';
import { Hero } from './components/Hero';
import { NuestraExperiencia } from './components/NuestraExperiencia';
import { SobreNosotros } from './components/SobreNosotros';
import { ViajesFav } from './components/ViajesFav';

export const MainApp = () => {
  return (
    <Fragment>
      <Nav />
      <Hero/>
      <SobreNosotros />
      <ViajesFav />
      <BannerRecorre />
      <NuestraExperiencia />
    </Fragment>
  )
}
