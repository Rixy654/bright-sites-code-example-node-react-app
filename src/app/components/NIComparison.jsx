import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NIComparison = ({ date, title, income }) => {
  const [nationalInsurance, setNationalInsurance] = useState(0);
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const postNationalInsurance = async () => {
      setIsLoading(true);
      try {
        let response = await fetch('http://localhost:8080/v1/national-insurance', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-run-date': date,
          },
          body: JSON.stringify({ income }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch National Insurance data');
        }

        response = await response.json();
        setNationalInsurance(response.ni);
        setErrorMessage(null);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage('Failed to fetch National Insurance data');
      }
    };

    postNationalInsurance();
  }, [income]);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f4f5f9', padding: '15px' }}>
      <Typography variant="subtitle1" gutterBottom>{title}</Typography>
      <Typography variant="subtitle2" gutterBottom id="ni-content">{isLoading ? 'Loading...' : errorMessage || nationalInsurance}</Typography>
    </Box>
  );
};

NIComparison.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
};

export default NIComparison;
