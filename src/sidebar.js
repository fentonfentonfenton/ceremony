import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/about">
                About
            </a>

            <a className="menu-item" href="/services">
                Services
            </a>

            <a className="menu-item" href="/contact">
                RSVP
            </a>
        </Menu>
    );
};
