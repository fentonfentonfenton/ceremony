import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Venue from './Venue'

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/venue' element={<Venue />}></Route>

            {/* <Route exact path='/rsvp' component={Rsvp}></Route> */}
        </Routes>
    );
}

export default Main;
