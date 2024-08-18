import React from 'react';
import { Box, Typography} from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: 'var(--color-primary)', // Replace with your theme color
      padding: '3rem 0',
      textAlign: 'left',
      fontSize: '0.9rem',
      marginTop: '3rem', // Adjust if necessary
    }}
  >
    <Typography variant="body1" sx={{ 
      fontSize: '1rem', 
      fontWeight: 400, 
      marginBottom: '1rem', 
      color: '#030303',
    }}>
      Connect 
    </Typography>
    <Typography variant="h5" component="a" href="#" role="button" sx={{ 
      fontSize: '2rem', 
      fontWeight: 500, 
      marginBottom: '2rem', 
      display: 'inline-block',
      color: '#030303',
      textDecoration: 'none',
      textAlign: 'left', // Ensure links have no underline
    }}>
      Get in Touch
    </Typography>
    <Typography variant="body1" sx={{ 
      fontSize: '1rem', 
      fontWeight: 400, 
      marginBottom: '1rem', 
      color: '#030303',
    }}>
      For any inquiries let us know
    </Typography>
  </Box>
);

export default Footer;