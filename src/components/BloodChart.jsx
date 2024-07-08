import React from 'react';
import  Chart  from '../shared/Chart.js';
import { Box, Typography } from '@mui/material';

import { ReactComponent as ExpandMore } from '../assets/ExpandMore.svg'

const BloodChart = () => {
  const labels = ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 160, 117, 150, 159],
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        pointRadius: 5,
        pointHitRadius: 10,
      },
      {
        label: 'Diastolic',
        data: [110, 65, 109, 90, 70, 80],
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        pointRadius: 5,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 60,
            suggestedMax: 200,
          },
        },
      ],
    },
  }

  return (
    <Box sx={{ width: { xs: '100%', md: '70%', xl: '100%' }, height: { xs: '300px', md: '90%' } }}>
      <Box
        sx={{
          // width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          // gap: '24px',
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          Blood Pressure
        </Typography>
        <Box
          sx={{
            // width: '100%',
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'flex-end' },
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Last 6 months
          </Typography>
          <ExpandMore alt="icon" />
        </Box>
      </Box>
      <Chart type="line" data={data} options={options}
      />
    </Box>
  );
};

export default BloodChart;
