import React from 'react';
import  Chart  from '../shared/Chart.js';
import { Box, Typography } from '@mui/material';

import { ReactComponent as ExpandMore } from '../assets/ExpandMore.svg'

const BloodChart = ({ activePatient }) => {
  const patient = activePatient?.diagnosis_history
  console.log(patient?.[0]?.blood_pressure?.systolic?.value)

  const labels = patient ? patient?.map(item => `${item.month} ${item.year}`) : ['1', '2', '3', '4', '5', '6'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: patient ? patient?.map(item => item?.blood_pressure?.systolic?.value) : [0, 0, 0, 0, 0, 0],
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        pointRadius: 5,
        pointHitRadius: 10,
      },
      {
        label: 'Diastolic',
        data: patient ? patient?.map(item => item?.blood_pressure?.diastolic?.value) : [0, 0, 0, 0, 0, 0],
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
