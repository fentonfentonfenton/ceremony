
import * as React from 'react';
import Container from '@mui/material/Container';

export default function Rspv({ rave }) {

    function RaveMode(rave) {
        return (
            <>{rave ? "RAVER!" + ' ✔' : ''}</>
        )

    }

    return (
        <>
            <Container height="100%" width="100" id="gForm">
                RSVP IS CLOSED NOW. COME ALONG. SEE YOU THERE.
            </Container>
        </>
    )
}


