import React from 'react';
import { Box, Typography } from '@mui/material';
import sponsorsimg from '../assets/sponsors.png';

function SponsorsSection() {
  const sponsors = ['Apple', 'Microsoft', 'Slack', 'Google'];

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '20px 10px', md: '40px 20px' },
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        boxSizing: 'border-box',  // Ensures padding is included in width calculation
        overflowX: 'hidden',  // Prevent horizontal scroll
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 200,
          fontSize: { xs: '2rem', md: '3rem' },
          fontFamily: 'Inter, sans-serif',
          marginBottom: '20px', // Adjusted margin for spacing
          maxWidth: '100%', // Ensures text doesn't overflow
          wordWrap: 'break-word', // Ensures proper wrapping if text is too long
        }}
      >
        Our Sponsors
      </Typography>

      {/* Adjusted image with max-width */}
      <Box
        component="img"
        src={sponsorsimg}
        alt="Sponsors"
        sx={{
          height: '50px',
          maxWidth: '100%', // Ensures image doesn't exceed the width of its container
          display: 'block',
          margin: '0 auto', // Centers the image horizontally
        }}
      />
    </Box>
  );
}

export default SponsorsSection;
