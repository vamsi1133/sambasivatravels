import React from "react";

import classes from "./NavigationItems.module.css";
import NavItem from "./NavItem/NavigationItem";


const navitems = props => {
    return (
            <ul onClick={props.clicked} className={classes.NavigationItems}>
                <NavItem link="">Home</NavItem>
                <NavItem link="Authentication">Signin</NavItem>
            </ul>
    )
}

export default navitems;