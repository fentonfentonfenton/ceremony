import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Names from './Names';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { Home, Event } from '@mui/icons-material';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      <Home fontSize="small" sx={{ verticalAlign: "middle" }} />

      {" St Ethelburga's - Centre for Reconciliation and Peace"}
      <br />
      <Event fontSize="small" sx={{ verticalAlign: "middle" }} />{" August 17th "}{new Date().getFullYear()}{' '}


    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm" id="App">
      <Box sx={{ my: 0 }}>
        <Typography variant="h3" sx={{ mt: 10 }}>
          AUGUST 17TH {new Date().getFullYear()}
        </Typography>
        <Typography variant="h4" sx={{ my: 2 }}>
          <Names />
        </Typography>
        <Typography variant="h3" sx={{ my: 3 }}>
          ©EREMONY
        </Typography>
        <Typography variant="h5" sx={{ my: 2, mb: 20 }}>
          This is the one thing we didn't want to happen
        </Typography>
        <Box sx={{ mb: 30 }}>
          <ProTip />
        </Box>
      </Box>
      <Box id="footer" sx={{ position: "relative", bottom: "0" }}>
        <Copyright />
      </Box>

    </Container>
  );
}

