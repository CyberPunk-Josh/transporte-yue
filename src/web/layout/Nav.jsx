import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { slide as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { EmailOutlined, FlightOutlined, HomeOutlined, PeopleOutline, MenuOutlined} from '@mui/icons-material';

import './nav.css';
import logo_web from '../../img/logo_mini.webp';

export const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar className='AppBar'>
            <BurgerMenu className='burguer_menu' customBurgerIcon={ <MenuOutlined />}>
                <Link to='/user/inicio'>
                  <span>
                    <HomeOutlined className='icon_nav'/>
                    Inicio
                  </span>
                </Link>
                <Link to='/user/nosotros'>
                  <span>
                    <PeopleOutline className='icon_nav'/>
                    Nosotros
                  </span>
                </Link>
                <Link to='#'>
                  <span>
                    <FlightOutlined className='icon_nav'/>
                    Viajes
                  </span>
                </Link>
                <Link to='#'>
                  <span>
                    <EmailOutlined className='icon_nav'/>
                    Contacto
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
