import React from 'react';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src="/logo.png" alt="MyBurger" />
    </div>
);

export default logo;