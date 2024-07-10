import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { Box, Grid } from '@mui/material'

import Header from '../components/Header'
import PatientsList from '../components/PatientsList'
import DiagnosisHistory from '../components/DiagnosisHistory'
import PatientInfo from '../components/PatientInfo'
import DiagonisticList from '../components/DiagonisticList'
import LabResult from '../components/LabResult'
import Dropdown from '../components/Dropdown'

import { getPatients } from '../services/dashboardServices'

const Patients = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['patients'],
    queryFn: getPatients,
  });
  const [activePatient, setActivePatient] = React.useState(null);

  React.useEffect(() => {
    if (data && data?.length >= 3) {
      setActivePatient(data[3])
    }
  }, [data])

  const handlePatientClick = (patient) => {
    setActivePatient(patient)
  }

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
        <Dropdown 
          data={data} 
          activePatient={activePatient}
          handlePatientClick={handlePatientClick}
        />
      </Box>

      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pr: '16px',
          // gap: '16px',
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
          <PatientsList 
            data={data} 
            isLoading={isLoading}
            activePatient={activePatient}
            handlePatientClick={handlePatientClick}
          />
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
          <DiagnosisHistory 
            activePatient={activePatient}
            isLoading={isLoading}
          />
          <DiagonisticList 
            activePatient={activePatient}
            isLoading={isLoading}
          />
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
          <PatientInfo 
            activePatient={activePatient}
            isLoading={isLoading}
          />
          <LabResult 
            activePatient={activePatient}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Patients