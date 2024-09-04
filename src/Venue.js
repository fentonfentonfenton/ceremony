import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import { useEffect, useState } from 'react';


export default function Venue() {

    const [rave, setRave] = useState(false);


    function RaveMode(rave) {
        return (
            <>{rave ? "RAVER!" + ' ✔' : ''}</>
        )

    }

    return (
        <>

        </>
    )
}
