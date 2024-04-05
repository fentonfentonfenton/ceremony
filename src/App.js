import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"St Ethelburga's - Centre for Reconciliation and Peace | "}
      {'August 17th '}{new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm" Id="App">
      <Box sx={{ my: 0 }}>
        <Typography variant="h2" component="h1" sx={{ mt: 10 }}>
          AUGUST 17TH {new Date().getFullYear()}
        </Typography>
        <Typography variant="h3" component="h1" sx={{ my: 2 }}>
          Moogz & Jack
        </Typography>
        <Typography variant="h1" component="h1" sx={{ my: 3 }}>
          ©EREMONY
        </Typography>
        <Typography variant="h4" component="h1" sx={{ my: 2 }}>
          This is the one thing we didn't want to happen
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

