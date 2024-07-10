import { Box, Card, Grid, Typography } from '@mui/material'

import RespiratoryRate from '../assets/images/RespiratoryRate.png'
import Temperature from '../assets/images/Temperature.png'
import HeartBPM from '../assets/images/HeartBPM.png'
import ArrowDown from '../assets/ArrowDown.svg'

const DiagnosisCards = ({ patient }) => {
  const CARDINFO = [
    {
      title: "Respiratory Rate",
      src: RespiratoryRate,
      number: patient?.respiratory_rate?.value || '0',
      unit: 'bpm',
      comment: patient?.respiratory_rate?.levels,
      backgroundColor: '#E0F3FA',
    },
    {
      title: "Temperature",
      src: Temperature,
      number: patient?.temperature?.value || '0',
      unit: '°F',
      comment: patient?.temperature?.levels,
      backgroundColor: '#FFE6E9',
    },
    {
      title: "Heart Rate",
      src: HeartBPM,
      number: patient?.heart_rate?.value || '0',
      unit: "bpm",
      comment: patient?.heart_rate?.levels,
      backgroundColor: '#FFE6F1',
      src2: ArrowDown,
    },
  ]
  
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center',
      }}
    >
      {CARDINFO?.map((info, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Card
            sx={{
              backgroundColor: info?.backgroundColor,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              // width: '100%',
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
        </Grid>
      ))}
    </Grid>
  )
}

export default DiagnosisCards