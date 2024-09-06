import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#9F2B68',
        },
        secondary: {
            main: '#9F2B68',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
