import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ height: '50vh' }} >
        <CircularProgress
          size={50}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#01F0D0',
          }}
        />
    </Box>
  );
};

export default Loader;
