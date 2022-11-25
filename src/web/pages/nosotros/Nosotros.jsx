import React, { Fragment } from 'react'
import { Footer } from '../../layout/Footer'
import { Nav } from '../../layout/Nav'
import { AcercaNosotros } from './components/AcercaNosotros'
import { AcordionInfo } from './components/AcordionInfo'
import { Hero } from './components/Hero'

export const Nosotros = () => {
  return (
    <Fragment>
      <Nav />
      <Hero />
      <AcercaNosotros />
      <AcordionInfo />
      <Footer />
    </Fragment>
  )
}
