import { Box, Card, Typography } from '@mui/material'

import Table from './Table';

const DiagonisticList = ({ activePatient }) => {
  return (
    <Card
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
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
            Diagnosis List
          </Typography>

          <Table activePatient={activePatient} />
        </Box>
    </Card>
  )
}

export default DiagonisticList;
    