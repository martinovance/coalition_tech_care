import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { Box, Grid } from '@mui/material'

import Header from '../components/Header'
import PatientsList from '../components/PatientsList'
import DiagnosisHistory from '../components/DiagnosisHistory'
import PatientInfo from '../components/PatientInfo'
import DiagonisticList from '../components/DiagonisticList'
import LabResult from '../components/LabResult'

import { getPatients } from '../services/dashboardServices'
import Dropdown from '../components/Dropdown'

const Patients = () => {
  const { data } = useQuery({
    queryKey: ['patients'],
    queryFn: getPatients,
  });

  console.log(data);

  return (
    <Box sx={{
      padding: '16px',
    }}>
      <Box
          sx={{
            width: '100%',
          }}
        >
        <Header />
      </Box>
      
      <Box
          sx={{
            display: { xs: 'flex', lg: 'none' },
            mt: 3,
          }}
      >
        <Dropdown />
      </Box>

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pr: '16px',
          gap: '16px',
        }}
      >
        <Grid
          item
          xs={12}
          lg={2.5}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            mt: { xs: 3, lg: 5 },
            width: '100%',
          }}
        >
          <PatientsList />
        </Grid>
          
        <Grid
          item
          xs={12}
          lg={6}
          // xl={4}
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            mt: 5,
          }}
        >
          <DiagnosisHistory />
          <DiagonisticList />
        </Grid>
        
        <Grid
          item
          xs={12}
          lg={2.5}
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            mt: 3,
            width: '100%',
          }}
        >
          <PatientInfo />
          <LabResult />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Patients