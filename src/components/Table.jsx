import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export default function Table({ activePatient }) {
  const patient = activePatient?.diagnostic_list
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (patient) {
      const data = patient?.map((diagnosis, index) => ({
        id: index + 1,
        problem: diagnosis.name,
        description: diagnosis.description,
        status: diagnosis.status,
      }));
      setRows(data);
    }
  }, [patient]);

  const columns = [
    { field: 'problem', headerName: 'Problem/Diagnosis', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'status', headerName: 'Status', width: 200 },
  ];

  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
