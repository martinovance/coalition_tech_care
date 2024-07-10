import { Box, Card, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'

import { ReactComponent as Download } from '../assets/Download.svg'

import Loader from '../shared/Loader'

const LabResult = ({ activePatient, isLoading }) => {
  const patient = activePatient?.lab_results

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        height: '296px',
        padding: '18px',
        borderRadius: '16px',
      }}
    >
        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lab Results</Typography>
          <Box>
            <List 
              sx={{
                maxHeight: '500px',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                  width: '8px',
                  backgroundColor: '#F5F5F5',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#ccc', 
                  borderRadius: '6px',
                },
              }}
            >
              {isLoading ? (
                <Loader />
              ) : ( patient?.map((result, index) => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="menu">
                      <Download />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={result}
                  />
                </ListItem>
              ))
            )}
            </List>
          </Box>
        </Box>

      {!patient && <Typography>No Result</Typography>}
    </Card>
  )
}

export default LabResult