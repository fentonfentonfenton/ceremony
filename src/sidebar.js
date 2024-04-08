import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
                VENUE
            </a>

            <a className="menu-item" href="/about">
                ORDER OF SERVICE
            </a>

            <a className="menu-item" href="/services">
                FAQ
            </a>

            <a className="menu-item" href="">
                RSVP
            </a>
        </Menu>
    );
};
