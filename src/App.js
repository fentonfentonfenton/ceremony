import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Names from './Names';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import { Home, Event } from '@mui/icons-material';
import SideBar from "./sidebar";
import CssBaseline from '@mui/material/CssBaseline';
import Switch from './switch';
import { Fragment, useState, createContext } from 'react';



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

function RaveMode(rave) {
  return (
    <>{rave ? "RAVER!" + ' ✔' : ''}</>
  )

}

export default function App() {

  const [rave, setRave] = useState(false);

  return (

    <Container maxWidth={false} id="Outside" disableGutters>
      <Box id="switch" sx={{ position: "fixed", right: "0", top: 10 }}>
        <Switch setRave={setRave} />
      </Box>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      < CssBaseline />

      <SideBar width={'200px'} pageWrapId={"App"} outerContainerId={"Outside"} rave={rave} />

      <Container maxWidth="sm" id="App">
        <Box sx={{ my: 0 }}>
          <Typography variant="h3" sx={{ mt: 10 }}>
            AUGUST 17TH {new Date().getFullYear()}
          </Typography>
          <Typography variant="h4" sx={{ my: 2 }}>
            <Names />
          </Typography>
          <Typography variant="h3" sx={{ my: 3 }}>
            ©EREMONY<br />{'... '}
          </Typography>
          <Typography variant="h5" sx={{ my: 2, mb: "10%" }}>
            This is the one thing we didn't want to happen
          </Typography>
          <Box sx={{ mb: "70%" }}>
            <ProTip />
            {RaveMode(rave)}
          </Box>
        </Box>
        <Box id="footer" sx={{ position: "relative", bottom: "0" }}>
          <Copyright />
        </Box>

      </Container>
    </Container>
  );
}

