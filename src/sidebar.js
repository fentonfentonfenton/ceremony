import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="">
                VENUE
            </a>

            <a className="menu-item" href="">
                ORDER OF SERVICE
            </a>

            <a className="menu-item" href="">
                FAQ
            </a>

            <a className="menu-item" href="">
                RSVP
            </a>
        </Menu>
    );
};
