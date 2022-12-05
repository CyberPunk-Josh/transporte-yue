import React, { Fragment } from 'react'
import { Footer } from '../../layout/Footer'
import { Nav } from '../../layout/Nav'
import { BannerRecorre } from '../Inicio/components/BannerRecorre'
import { Hero } from './components/Hero'
import { ViajesCal } from './components/ViajesCal'
import { ViajesFav } from './components/ViajesFav'


export const Viajes = () => {
  return (
    <Fragment>
        <Nav />
        <Hero />
        <ViajesFav />
        <BannerRecorre />
        <ViajesCal />
        <Footer />
    </Fragment>
  )
}
