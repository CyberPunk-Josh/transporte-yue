import { Fragment } from 'react'

import { Nav } from '../../layout/Nav';
import { Hero } from './components/Hero';

export const MainApp = () => {
  return (
    <Fragment>
      <Nav />
      <Hero/>
    </Fragment>
  )
}
