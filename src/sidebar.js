import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';


export default function SideBar({ ...props }) {
    const [raved, setRaved] = useState(false);

    const [isMenuOpen, handleMenu] = useState(false);
    const handleCloseMenu = () => {
        handleMenu(false);
    };
    const handleStateChange = (state) => {
        handleMenu(state.isOpen);
    };

    return (
        <Menu {...props} isOpen={isMenuOpen}
            onStateChange={handleStateChange}>
            <Link to="/" className="menu-item" onClick={() => handleCloseMenu()}><Home fontSize="small" sx={{ verticalAlign: "middle" }} /></Link>

            <Link to="/venue" className="menu-item" onClick={() => handleCloseMenu()}>VENUE</Link>
            <Link to="/faq" className="menu-item" onClick={() => handleCloseMenu()}>FAQ {props.rave ? ' WTF' : ''}</Link>
            <Link to="/lineup" className="menu-item" onClick={() => handleCloseMenu()}>LINEUP</Link>

            {/* <a className="menu-item" href="" onClick={() => setRaved(raved => !raved)}>
                <>{'RAVE MODE'} {props.rave ? ' ✔' : ''}</>
            </a> */}
        </Menu>
    );
};
