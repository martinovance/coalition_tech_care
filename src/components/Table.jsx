import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const rows = [
  { id: 1, problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
  { id: 2, problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  { id: 3, problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
];

const columns = [
  { field: 'problem', headerName: 'Problem/Diagnosis', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 100 },
];

export default function Table() {
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
