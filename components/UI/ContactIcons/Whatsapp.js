import classes from "./Icon.module.css"

const whatsapp = (props) => {
    const whatsappHandler=()=>{
        window.location.href="https://wa.me/+919494682233"
    }
    return (
        <div className={classes.Whatsapp + " col-4"} onClick={whatsappHandler}>
                <img src="https://img.icons8.com/cotton/40/000000/whatsapp--v4.png" />
        </div>
    )
}

export default whatsapp;