import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import "./styles.css";
import SideBar from "./sidebar";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

import { Universal } from '@shopify/react-google-analytics';

const UNIVERSAL_GA_ACCOUNT_ID = process.env.REACT_APP_UNIVERSAL_GA_ACCOUNT_ID;

root.render(


    <ThemeProvider theme={theme}>
        <div id="outer-container">

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            < CssBaseline />
            <Universal
                account={UNIVERSAL_GA_ACCOUNT_ID}
                domain={"www.prangbait.com"}
                disableTracking
                debug
            // NOTE: This prop will load and set the debug mode for Google Analytics
            // https://developers.google.com/analytics/devguides/collection/analyticsjs/debugging
            />
            <SideBar pageWrapId={"App"} outerContainerId={"outer-container"} />

            <App />
        </div>
    </ThemeProvider >,
);
