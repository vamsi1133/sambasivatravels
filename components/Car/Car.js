import React from "react";
import SlideShow from "../Slideshow/Slideshow";
import classes from './Car.module.css';
import Card from "../Card/Card";

const car = props => {
    return (
        <div className={classes.Car + " " + "col-md-6"}>
            <Card>
                <h4>{props.carModel}</h4>
                <SlideShow {...props} />
                <hr />
                <div>
                    <label><em>Price:</em></label>
                    <span> {props.price + "₹"}/Day</span>
                </div>
                <div>
                    <label><em>Availability:</em></label>
                    <span> {props.availability}</span>
                </div>
                <hr/>
            </Card>
        </div>
    )
}

export default car;