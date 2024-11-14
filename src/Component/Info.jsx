import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import container from "../assets/Image-container.png";

function Info() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#003366',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center', // Center the items horizontally
        padding: { xs: '50px 20px', md: '100px 60px' },
        position: 'relative',
        boxSizing: 'border-box',  // Ensures padding is included in width
        overflowX: 'hidden',  // Prevent horizontal overflow
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center the text vertically
          alignItems: 'center', // Center the text horizontally
          padding: { xs: '20px', md: '40px' },
          textAlign: 'center', // Center the text alignment
          width: '100%', // Ensure it takes full width without causing overflow
          boxSizing: 'border-box', // Include padding in the element's width
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
          Your work, everywhere you are
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: { xs: '0.875rem', md: '1rem' },
            padding: { xs: '8px 16px', md: '12px 24px' },
          }}
        >
          Try Taskey
        </Button>
      </Box>
    </Box>
  );
}

export default Info;
