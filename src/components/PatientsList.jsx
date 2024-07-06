import { Avatar, Box, Card, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import { ReactComponent as MoreHorizonIcon } from '../assets/MoreHorizonIcon.svg'
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg'

import React from 'react'

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const PatientsList = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '330px',
        height: '800px',
        padding: '18px 6px 18px 18px',
        borderRadius: '16px',
        mt: 5,
      }}
    >
      <Box 
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Patients</Typography>
          <IconButton size="large" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <List 
            sx={{
              maxHeight: '750px',
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
                sx={{ padding: '0px !important', margin: '16px 0' }}
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <MoreHorizonIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    {/* <FolderIcon /> */}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Emilly Williams"
                  secondary="Female 18"
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Box>
    </Card>
  )
}

export default PatientsList