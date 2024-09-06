
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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetsVj_5om3zB1PPVBxnezTTXP6PkQVtFIU4Dz27VR2zqKoTQ/viewform?embedded=true" width="600" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </Container>
        </>
    )
}


