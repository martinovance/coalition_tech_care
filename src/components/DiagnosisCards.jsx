import { Box, Card, Typography } from '@mui/material'
import React from 'react'

import RespiratoryRate from '../assets/images/RespiratoryRate.png'
import Temperature from '../assets/images/Temperature.png'
import HeartBPM from '../assets/images/HeartBPM.png'
import ArrowDown from '../assets/ArrowDown.svg'

const CARDINFO = [
  {
    title: "Respiratory Rate",
    src: RespiratoryRate,
    number: "20",
    unit: 'bpm',
    comment: 'Normal',
    backgroundColor: '#E0F3FA',
  },
  {
    title: "Temperature",
    src: Temperature,
    number: "98.6",
    unit: '°F',
    comment: 'Normal',
    backgroundColor: '#FFE6E9',
  },
  {
    title: "Heart Rate",
    src: HeartBPM,
    number: "78",
    unit: "bpm",
    comment: 'Lower than average',
    backgroundColor: '#FFE6F1',
    src2: ArrowDown,
  },
]

const DiagnosisCards = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: '16px',
    }}>
      {CARDINFO?.map((info, i) => (
        <Card
          sx={{
            backgroundColor: info?.backgroundColor,
            display: 'flex',
            flexDirection: 'column',
            justifyCotent: 'flex-start',
            width: '228px',
            height: '215px',
            padding: '12px',
            gap: '12px',
            borderRadius: '12px',
          }}
        >
          <img src={info?.src} alt="icon" style={{ width: '85px', height: '85px' }} />
          <Typography variant="body2">
            {info?.title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', width: '100%' }}>
            {info?.number} {info?.unit}
          </Typography>
          <Box display="flex" gap="4px">
            {info?.src2 && (
              <img src={info?.src2} alt="icon" />
            )}
            <Typography variant="body2">
              {info?.comment}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export default DiagnosisCards