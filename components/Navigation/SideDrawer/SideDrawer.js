import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from "../../../hoc/Auxilary/Auxilary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems clicked={props.closed} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;