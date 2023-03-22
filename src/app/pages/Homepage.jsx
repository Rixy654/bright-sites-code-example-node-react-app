import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import NIComparison from '../components/NIComparison';
import debounce from '../utils/debounce';

const Homepage = () => {
  const [income, setIncome] = useState(0);

  const handleIncomeChange = useMemo(() => debounce((value) => {
    setIncome(value);
  }, 500), []);

  const handleTextFieldChange = (event) => {
    const value = Number.parseInt(event.target.value, 10);
    handleIncomeChange(value);
  };

  return (
    <Container maxWidth="lg" className="container" sx={{ marginTop: '20px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="income"
              label="Income"
              variant="filled"
              type="number"
              required
              onChange={handleTextFieldChange}
              sx={{ width: '100%' }}
              defaultValue={0}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <NIComparison title="Your NI for 2018/19" date="2018-04-06" income={income} />
          </Grid>
          <Grid item xs={12} md={6}>
            <NIComparison title="Your NI for 2019/20" date="2019-04-06" income={income} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Homepage;
