import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Page from './Page';
import Rsvp from './Rsvp';

const Main = ({ rave }) => {

    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home rave={rave} />}></Route>
            <Route exact path='/venue' element={<Page page='venue' />}></Route>
            <Route exact path='/faq' element={<Page page='faq' />}></Route>
            <Route exact path='/lineup' element={<Page page='lineup' />}></Route>
            <Route exact path='/rules' element={<Page page='rules' />}></Route>
            <Route exact path='/kids' element={<Page page='kids' />}></Route>
            <Route exact path='/food' element={<Page page='food' />}></Route>
            <Route exact path='/volunteer' element={<Page page='volunteer' />}></Route>
            <Route exact path='/perform' element={<Page page='perform' />}></Route>

            <Route exact path='/rsvp' element={<Rsvp />}></Route>
        </Routes >
    );
}

export default Main;
