import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { slide as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { EmailOutlined, FlightOutlined, HomeOutlined, PeopleOutline, MenuOutlined, SearchOutlined, FactCheckOutlined} from '@mui/icons-material';

import './nav.css';
import logo_web from '../../img/logo_mini.webp';

export const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar className='AppBar'>
            <BurgerMenu className='burguer_menu' customBurgerIcon={ <MenuOutlined />}>
                <Link to='/user/inicio'>
                  <span className='nav-span'>
                    <HomeOutlined className='icon_nav'/>
                    Inicio
                  </span>
                </Link>
                <Link to='/user/nosotros'>
                  <span className='nav-span'>
                    <PeopleOutline className='icon_nav'/>
                    Nosotros
                  </span>
                </Link>
                <Link to='/user/viajes'>
                  <span className='nav-span'>
                    <FlightOutlined className='icon_nav'/>
                    Viajes
                  </span>
                </Link>
                <Link to='/user/buscador'>
                  <span className='nav-span'>
                    <SearchOutlined className='icon_nav'/>
                    Buscador
                  </span>
                </Link>
                <Link to='/user/contacto'>
                  <span className='nav-span'>
                    <EmailOutlined className='icon_nav'/>
                    Contacto
                  </span>
                </Link>
                <Link to='/user/evaluacion'>
                  <span className='nav-span'>
                    <FactCheckOutlined className='icon_nav'/>
                    Evaluación 
                  </span>
                </Link>
              <div className='nav_logo_karina'>
                <img src={ logo_web } alt="logo transporte YUE" />
                <span>Transporte YUE</span>
              </div>
            </BurgerMenu>
          <Button color='inherit' className='logo_karina'>
            <img src={ logo_web } alt="logo transporte YUE" />
            <span>Transporte YUE</span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
