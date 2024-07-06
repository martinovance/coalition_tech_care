import { Box, Card, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'

import { ReactComponent as Download } from '../assets/Download.svg'

import React from 'react'

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const LabResult = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '330px',
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
            {generate(
              <ListItem
                // sx={{ margin: '16px 0' }}
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <Download />
                  </IconButton>
                }
              >
                <ListItemText
                  primary="Blood Test"
                  // secondary="Female 18"
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </Card>
  )
}

export default LabResult