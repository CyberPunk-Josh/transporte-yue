import React from 'react'
import { Fragment } from 'react'
import { Footer } from '../../layout/Footer'
import { Nav } from '../../layout/Nav'
import { Hero } from '../buscador/components/Hero'
import { SearchFilter } from './components/SearchFilter'

export const Buscador = () => {
  return (
    <Fragment>
        <Nav />
        <Hero />
        <SearchFilter />
        <Footer />
    </Fragment>
  )
}
