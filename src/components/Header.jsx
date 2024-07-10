import { Avatar, Box, Button, Card, Divider, IconButton, Typography } from '@mui/material'

import { ReactComponent as TestLogo } from '../assets/TestLogo.svg'
import { ReactComponent as Home } from '../assets/Home.svg'
import { ReactComponent as Group } from '../assets/Group.svg'
import { ReactComponent as Calendar } from '../assets/Calendar.svg'
import { ReactComponent as Chat } from '../assets/Chat.svg'
import { ReactComponent as CreditCard } from '../assets/CreditCard.svg'
import { ReactComponent as Settings } from '../assets/Settings.svg'
import { ReactComponent as MoreVertIcon } from '../assets/MoreVertIcon.svg'

import FemaleDoctor from '../assets/images/FemaleDoctor.png'


const Header = () => {
  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        Width: '100%',
        height: '42px',
        padding: '18px',
        borderRadius: '70px'
      }}
    >
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <TestLogo alt="logo" />
      </Box>
      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <TestLogo alt="logo" 
          style={{  width: '120px' }}
        />
      </Box>

      <Box sx={{
        display:  { xs: 'none', lg: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px',
      }}>
        <Box display="flex" alignItems="center" gap="8px">
          <Home alt="home" />
          <Typography variant="body1">Overview</Typography>
        </Box>
        <Button active sx={{
          width: '121px',
          height: '41px',
          borderRadius: '41px',
          textTransform: 'none',
          color: '#000000',
          backgroundColor: '#01F0D0',
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#01F0D0',
          },
        }}>
          <Box display="flex" alignItems="center" gap="8px">
            <Group alt="home" />
            <Typography variant="body1">Patients</Typography>
          </Box>
          </Button>
        <Box display="flex" alignItems="center" gap="8px">
          <Calendar alt="home" />
          <Typography variant="body1">Schedule</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <Chat alt="home" />
          <Typography variant="body1">Messgae</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="8px">
          <CreditCard alt="home" />
          <Typography variant="body1">Transactions</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Avatar src={FemaleDoctor} 
          sx={{ 
            width: { xs: 26, sm: 36 }, 
            height: { xs: 26, sm: 36 }  
          }} 
        />
        <Box
          sx={{
            display:  { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            alignItems: 'flex-start',
            // gap: '4px',
          }}
        >
          <Typography variant="body2" 
            sx={{ fontWeight: 'bold'}}
          >
            Dr. Jose Simmons
          </Typography>
          <Typography variant="body2">General Practitioner</Typography>
        </Box>
        <Divider orientation="vertical" />
        <Settings alt="settings" />
        <IconButton sx={{ display: {xs: 'none', sm: 'flex'}}}>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default Header