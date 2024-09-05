import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import "./styles.css";
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module'




const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


const GTM_ID = process.env.GTM_ID;

const tagManagerArgs = {
    gtmId: GTM_ID
}

TagManager.initialize(tagManagerArgs)


root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider >,
);
