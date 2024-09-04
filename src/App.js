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
import Main from "./main";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      <Home fontSize="small" sx={{ verticalAlign: "middle" }} />

      {" St Ethelburga's - Centre for Reconciliation and Peace"}
      <br />
      <Event fontSize="small" sx={{ verticalAlign: "middle" }} />{" November 11th "}{new Date().getFullYear()}{' '}
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
    <>
      <Box id="switch" sx={{ position: "absolute", right: "0", top: 10 }}>
        <Switch setRave={setRave} />
      </Box>

      <Container maxWidth={false} height="100%" id="Outside" disableGutters>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <SideBar width={'200px'} pageWrapId={"App"} outerContainerId={"Outside"} rave={rave} />
        < CssBaseline />

        <Container maxWidth="sm" id="App">
          <Box sx={{ my: 0 }}>
            <Typography variant="h3" sx={{ mt: 10 }}>
              NOVEMBER 11TH {new Date().getFullYear()}
            </Typography>
            <Typography variant="h4" sx={{ my: 2 }}>
              <Names />
            </Typography>
            <Typography variant="h3" sx={{ my: 3 }}>
              ©EREMONY {rave ? '9/11' : ''} <br />{'... '}
            </Typography>
            <Main />

          </Box>
          <Box id="footer" sx={{ position: "relative", bottom: "0" }}>
            <Copyright />
          </Box>

        </Container>
      </Container>
    </>
  );
}

