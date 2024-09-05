
import * as React from 'react';

export default function Rspv({ rave }) {

    function RaveMode(rave) {
        return (
            <>{rave ? "RAVER!" + ' ✔' : ''}</>
        )

    }

    return (
        <>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSetsVj_5om3zB1PPVBxnezTTXP6PkQVtFIU4Dz27VR2zqKoTQ/viewform?embedded=true" width="340" height="995" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </>
    )
}


