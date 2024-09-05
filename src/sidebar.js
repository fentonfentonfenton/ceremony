import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function SideBar({ ...props }) {
    const [raved, setRaved] = useState(false);

    return (
        <Menu {...props}>
            <Link to="/venue" className="menu-item">VENUE</Link>
            <Link to="/faq" className="menu-item">FAQ {props.rave ? ' WTF' : ''}</Link>
            <Link to="/lineup" className="menu-item">LINEUP</Link>


            {/* <a className="menu-item" href="" onClick={() => setRaved(raved => !raved)}>
                <>{'RAVE MODE'} {props.rave ? ' ✔' : ''}</>
            </a> */}
        </Menu>
    );
};
