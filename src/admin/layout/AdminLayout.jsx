import { Box, Toolbar } from '@mui/material';
import { Navbar } from '../components/Navbar';

const drawerWith = 240;

export const AdminLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Navbar drawer={ drawerWith }/>
        <Box component='main' sx={{ flexGrow:1, p:3 }}>
            <Toolbar />
            { children }
        </Box>
    </Box>
  )
}
