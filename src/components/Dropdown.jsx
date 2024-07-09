import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import PatientsList from './PatientsList';

export default function Dropdown({ data, handlePatientClick, activePatient }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuClick = (e) => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        disableElevation
        variant="contained"
        ref={anchorRef}
        sx={{
          width: { xs: '100%', sm: '300px' },
          '& .MuiButton-root': {
            color: '#000000',
            backgroundColor: '#fff',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }}
      >
        <Button sx={{ width: { xs: '80%' }}}>{activePatient?.name || 'Select Patient'}</Button>
        <Button
          sx={{ width: { xs: '20%' }}}
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            fullWidth
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onClick={handleMenuClick} id="split-button-menu" autoFocusItem>
                  <PatientsList 
                    data={data} 
                    activePatient={activePatient}
                    handlePatientClick={handlePatientClick}
                  />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
