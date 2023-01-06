import { Grid, Switch, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { loadEvaluaciones } from '../../helpers/loadEvaluaciones'
import { ActiveEvaluacionesTable } from '../components/ActiveEvaluacionesTable'
import { InactiveEvaluacionesTable } from '../components/InactiveEvaluacionesTable'
import { AdminLayout } from '../layout/AdminLayout'


export const Evaluaciones = () => {

  const [evaluacionesActivas, setEvaluacionesActivas] = useState([]);
  const [evaluacionesInactivas, setEvaluacionesInactivas] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(false);
  
  useEffect(() => {

    loadEvaluaciones().then( response => {
      setEvaluacionesActivas(response)
    })

    loadEvaluaciones().then( response => {
      setEvaluacionesInactivas(response)
    })

    setReloadUsers(false);
  }, [reloadUsers])
  

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };  

  return (
    <AdminLayout>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item >
            <Typography variant='h3' component='div' sx={{ marginBottom: '10px'}}>
              Evaluaciones
            </Typography>
          </Grid>
          <Grid item >
            <Switch
              checked={checked}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {
          checked 
            ? <ActiveEvaluacionesTable
              evaluacionesActivas={evaluacionesActivas}
              setReloadUsers={setReloadUsers}
            /> 
            : <InactiveEvaluacionesTable
              evaluacionesInactivas={evaluacionesInactivas}
              setReloadUsers={setReloadUsers}
            />
        }
    </AdminLayout>
  )
}
