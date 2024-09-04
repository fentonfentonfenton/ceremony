import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';




const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

import { Universal } from '@shopify/react-google-analytics';

const UNIVERSAL_GA_ACCOUNT_ID = process.env.REACT_APP_UNIVERSAL_GA_ACCOUNT_ID;




root.render(
    <ThemeProvider theme={theme}>
        <Universal
            account={UNIVERSAL_GA_ACCOUNT_ID}
            domain={"www.prangbait.com"}
            disableTracking
            debug
        // NOTE: This prop will load and set the debug mode for Google Analytics
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/debugging
        />

        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider >,
);
