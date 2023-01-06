import React from 'react'
import { Nav } from '../../layout/Nav'
import { Fragment } from 'react'
import { Hero } from './components/Hero'
import { ContactForm } from './components/ContactForm'
import { Footer } from '../../layout/Footer'

export const Contacto = () => {
  return (
    <Fragment>
        <Nav />
        <Hero />
        <ContactForm />
        <Footer />
    </Fragment>
  )
}
