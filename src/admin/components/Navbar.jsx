import { AppBar, Drawer, Grid, IconButton, Link, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Analytics, FlightOutlined, LogoutOutlined, TaskOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const data = [
    {
        name: 'Admin Panel',
        icon: <Analytics />,
        route: '/admin/panel'
    },
    {
        name: "Viajes",
        icon: <FlightOutlined />,
        route: '/admin/viajes',
    },
    {   name: "Evaluaciones", 
        icon: <TaskOutlined />,
        route: '/evaluaciones'
    },
]


export const Navbar = ({ drawerWith= 240 }) => {

    const [open, setOpen] = useState(false);


    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
            <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link component={RouterLink} color='inherit' to={item.route}>
              <ListItemText>{item.name}</ListItemText>
            </Link>
            </ListItem>
        ))}
        </div>
    );

  return (
    <AppBar
      position='fixed'
      sx={{
        ml: { sm: `${drawerWith}px`}
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ ml: 2}}
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            {getList()}
        </Drawer>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h5'noWrap component='div'>ADMIN Karina</Typography>
          <IconButton
            color='error'
          >
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
