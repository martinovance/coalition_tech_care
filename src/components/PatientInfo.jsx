import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import React from 'react'

import CalendarToday from '../assets/CalendarToday.svg'
import FemaleIcon from '../assets/FemaleIcon.svg'
import PhoneIcon from '../assets/PhoneIcon.svg'
import InsuranceIcon from '../assets/InsuranceIcon.svg'
import Loader from '../shared/Loader'

const PatientInfo = ({ activePatient, isLoading }) => {
  const patient = activePatient

  const PATIENTDETAILS = [
    {
      title: 'Date of Birth',
      svg: CalendarToday,
      description: patient?.date_of_birth,
    },
    {
      title: 'Gender',
      svg: FemaleIcon,
      description: patient?.gender,
    },
    {
      title: 'Contact Info.',
      svg: PhoneIcon,
      description: patient?.phone_number,
    },
    {
      title: 'Emergency Contacts',
      svg: PhoneIcon,
      description: patient?.emergency_contact,
    },
    {
      title: 'Insurance Provider',
      svg: InsuranceIcon,
      description: patient?.insurance_type,
    },
  ]

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: '600px',
        padding: '18px',
        borderRadius: '16px',
    }}
  >
    
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: '8px',
            mt: 2,
          }}
        >
          <Avatar src={patient?.profile_picture} alt="image"  
            sx={{ 
              width: '200px', 
              height: '200px' 
            }} 
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {patient?.name}
          </Typography>
        </Box>

        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px',
            mt: 5,
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (PATIENTDETAILS?.map((info, i) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '42px',
              height: '42px',
              backgroundColor: '#F6F7F8',
              borderRadius: '20px',
            }}>
              <img src={info?.svg} alt="icon" />
            </Box>
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <Typography variant="body2">
                {info?.title}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold'}}>
                {info?.description}
              </Typography>
            </Box>
          </Box>
          ))
        )}

        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: '8px',
            mt: 5,
          }}
        >
          <Button sx={{
            color: '#000000',
            width: '200px',
            hieght: '41px',
            backgroundColor: '#01F0D0',
            borderRadius: '41px',
            textTransform: 'none',
          }}>
            <Typography variant="body2">Show All Information</Typography>
          </Button>
        </Box>
  </Card>
  )
}

export default PatientInfo