import classes from "./Icon.module.css";

const phone = (props) => {
    const callHandler=()=>{
        window.location.href='tel:9494682233'
    }
    return (
        <div className={classes.Phone + " col-4"} onClick={callHandler}>
<img src="https://img.icons8.com/plasticine/40/000000/phone-not-being-used.png"/>        </div>
    )
}

export default phone;