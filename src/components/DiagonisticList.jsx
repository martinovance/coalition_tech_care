import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Table from './Table';

const DiagonisticList = () => { 
  return (
  <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '640px',
        minHeight: '349px',
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

        <Table />
      </Box>
    </Card>
  )
}

export default DiagonisticList;
    