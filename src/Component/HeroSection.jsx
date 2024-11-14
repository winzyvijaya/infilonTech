import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import container from "../assets/Image-container.png";

function HeroSection() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#003366',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: { xs: '50px 20px', md: '100px 60px' },
        position: 'relative',
        boxSizing: 'border-box',  // Include padding within the width
        overflowX: 'hidden',      // Prevent horizontal overflow
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          padding: { xs: '20px', md: '40px' },
          textAlign: { xs: 'center', md: 'left' },
          marginRight: { md: '20px' },
          width: '100%',  // Ensure text section takes full width of the container
          boxSizing: 'border-box',  // Prevent padding from causing overflow
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Get More Done with Whitepace
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            padding: { xs: '8px 16px', md: '12px 24px' },
          }}
        >
          Try Whitepace Free
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        component="img"
        src={container}
        alt="Illustration"
        sx={{
          flex: 1,
          maxWidth: '100%',
          height: 'auto',
          marginTop: { xs: '20px', md: '0' },
          padding: { xs: '20px', md: '40px' },
          width: '100%', // Ensures the image fills its container width
          boxSizing: 'border-box',  // Include padding within the image width
        }}
      />
    </Box>
  );
}

export default HeroSection;
