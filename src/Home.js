import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import { useEffect, useState } from 'react';


export default function Home({ rave }) {

    function RaveMode(rave) {
        return (
            <>{rave ? "RAVER!" + ' ✔' : ''}</>
        )

    }

    return (
        <>
            <Typography variant="h5" sx={{ my: 2, mb: "10%" }}>
                This is the one thing we didn't want to happen
            </Typography>
            <Box>
                <ProTip rave={rave} />

                {RaveMode(rave)}
            </Box>
        </>
    )
}
