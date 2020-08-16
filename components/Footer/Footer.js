import React from "react";

import Phone from "../UI/ContactIcons/Phone";
import Mail from "../UI/ContactIcons/Mail";
import Whatsapp from "../UI/ContactIcons/Whatsapp";
import classes from "./Footer.module.css"

const footer = props => {
    return (
        <div className={classes.Footer+" row"}>
            <Phone/>
            <Mail/>
            <Whatsapp/>
        </div>
    )
}

export default footer;