import { Box, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import BloodChart from './BloodChart'

import { ReactComponent as ArrowUp } from '../assets/ArrowUp.svg'
import { ReactComponent as ArrowDown } from '../assets/ArrowDown.svg'
import DiagnosisCards from './DiagnosisCards'

const DiagnosisHistory = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: '600px',
        padding: '18px',
        borderRadius: '16px',
      }}
    >
    <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Diagnosis History
        </Typography>

        <Box
          sx={{
            backgroundColor: '#F4F0FE',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            height: { xs: '100%', md: '300px' },
            padding: '12px',
            borderRadius: '16px',
            boxSizing: 'border-box',
            gap: { xs: '50px', md: '16px' }
          }}
        >
          <BloodChart />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', md: '45%' },
              gap: '8px'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px'}}>
              <Box sx={{ width: '14px', height: '14px', background: '#E66FD2', borderRadius: '10px' }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Systolic
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              160
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <ArrowUp alt="icon" />
              <Typography variant="body2">
                Higher than average
              </Typography>
            </Box>
            <Divider orientation="horizontal" />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '8px'}}>
              <Box sx={{ width: '14px', height: '14px', background: '#8C6FE6', borderRadius: '10px' }} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Diastolic
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              70
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <ArrowDown alt="icon" />
              <Typography variant="body2">
                Lower than average
              </Typography>
            </Box>
          </Box>
        </Box>

        <DiagnosisCards />
      </Box>
  </Card>
  )
}

export default DiagnosisHistory