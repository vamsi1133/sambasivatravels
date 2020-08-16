import React from "react";
import classes from "./Cars.module.css"

import Car from "../../components/Car/Car";

const cars = props => {
    return (
        <div>
            <Car
                car1="/car1.jpg"
                car2="/car1.jpg"
                car3="/car1.jpg"
                car4="/car1.jpg"
                carModel="INNOVA"
                availability="YES"
            />
                <Car
                    car1="/Brezza.jpg"
                    car2="/Brezza.jpg"
                    car3="/Brezza.jpg"
                    car4="/Brezza.jpg"
                    carModel="Brezza"
                    availability="YES"
                />
        </div>
    )
}

export default cars;