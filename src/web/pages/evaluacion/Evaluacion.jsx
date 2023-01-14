import React, { Fragment } from 'react'
import { Footer } from '../../layout/Footer'
import { Nav } from '../../layout/Nav'
import { EvaluationForm } from './components/EvaluationForm'

export const Evaluacion = () => {
  return (
    <Fragment>
        <Nav />
        <EvaluationForm />
        <Footer />
    </Fragment>
  )
}
