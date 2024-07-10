import { Avatar, Box, Card, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import { ReactComponent as MoreHorizonIcon } from '../assets/MoreHorizonIcon.svg'
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg'

import Loader from '../shared/Loader';

const PatientsList = ({ data, isLoading, activePatient, handlePatientClick }) => {
  // const active = activePatient && activePatient?.map(item => item?.name)

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        height: '800px',
        padding: '18px 6px 18px 18px',
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
              ml: '-16px',
            }}
          >
            {isLoading ? (
              <Loader />
            ) : ( data?.map((patient, index) => (
              <ListItem
                key={index}
                onClick={() => handlePatientClick(patient)}
                sx={{
                  pl: '14px', 
                  backgroundColor: patient.name === (activePatient && activePatient.name) ? '#D8FCF7' : 'transparent',
                  cursor: 'pointer',
                }}
                secondaryAction={
                  <IconButton edge="end" aria-label="menu">
                    <MoreHorizonIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar src={patient?.profile_picture} alt="image" />
                </ListItemAvatar>
                <ListItemText
                  primary={patient?.name}
                  secondary={`${patient?.gender}  ${patient?.age} `}
                />
              </ListItem>
            )))}

            {!data && (
              <Typography>No Patient</Typography>
            )}
          </List>
        </Box>
      </Box>
    </Card>
  )
}

export default PatientsList