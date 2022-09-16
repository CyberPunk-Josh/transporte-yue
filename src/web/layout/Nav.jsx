import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { slide as BurgerMenu } from 'react-burger-menu';

import './nav.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar className='AppBar'>
            <BurgerMenu>
              <Link to='#'>Inicio</Link>
              <Link to='#'>Nosotros</Link>
              <Link to='#'>Viajes</Link>
              <Link to='#'>Contacto</Link>
            </BurgerMenu>
          <Button color='inherit' className='logo'>Logo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
