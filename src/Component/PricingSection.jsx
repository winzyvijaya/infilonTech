import React from 'react';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';

function PricingSection() {
  const plans = [
    { title: 'Free', price: '$0', features: ['Basic features', 'Limited support'] },
    { title: 'Personal', price: '$11.99', features: ['24/7 support', 'Premium features'] },
    { title: 'Organization', price: '$49.99', features: ['Advanced features', 'Priority support'] },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '40px 10px', md: '60px 20px' },
        textAlign: 'center',
        boxSizing: 'border-box',  // Ensures padding is included in width
        overflowX: 'hidden',  // Prevent horizontal scroll
      }}
    >
      <Typography variant="h4" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography variant="body1" gutterBottom>
        Whether you’re a solo user or part of a large organization, we have a plan that suits your needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: '20px',
                height: '100%',
                boxSizing: 'border-box', // Ensures padding is included in element's width
                overflowX: 'hidden', // Prevent overflow
              }}
            >
              <Typography variant="h5">{plan.title}</Typography>
              <Typography variant="h6" color="primary">
                {plan.price}
              </Typography>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PricingSection;
