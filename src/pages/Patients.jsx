import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import PatientsList from '../components/PatientsList'
import DiagnosisHistory from '../components/DiagnosisHistory'
import PatientInfo from '../components/PatientInfo'
import DiagonisticList from '../components/DiagonisticList'
import LabResult from '../components/LabResult'

const Patients = () => {
  return (
    <Box sx={{
      padding: '16px'
    }}>
      <Header />

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
      }}>
        <PatientsList />
        <Box
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
        </Box>
        <Box
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            mt: 3,
          }}
        >
          <PatientInfo />
          <LabResult />
        </Box>
      </Box>
    </Box>
  )
}

export default Patients