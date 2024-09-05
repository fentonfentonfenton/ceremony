import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/venue' element={<Page page='venue' />}></Route>
            <Route exact path='/faq' element={<Page page='faq' />}></Route>
            <Route exact path='/lineup' element={<Page page='lineup' />}></Route>
            {/* <Route exact path='/rsvp' component={Rsvp}></Route> */}
        </Routes>
    );
}

export default Main;
