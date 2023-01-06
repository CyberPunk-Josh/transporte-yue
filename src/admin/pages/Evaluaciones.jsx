import { Grid, Typography } from '@mui/material'
import React from 'react'
import { EvaluacionesTable } from '../components/EvaluacionesTable'
import { AdminLayout } from '../layout/AdminLayout'


export const Evaluaciones = () => {
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
        </Grid>
        <EvaluacionesTable />
    </AdminLayout>
  )
}
