import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


import classes from './NavigationItem.module.css';


const navigationItem = (props) => {
     const router= useRouter()
    return(
        <li className={classes.NavigationItem}>
        <Link href={"/"+props.link} ><a>{props.children}</a></Link>
    </li>
    )

    };

export default navigationItem;