import classes from "./Icon.module.css";

const mail = (props) => {
    const mailHandler = () => {
        window.location.href = "mailto:vamsi@qwer"
    }

    return (
        <div className={classes.Mail + " col-4"} onClick={mailHandler}>
            <img src="https://img.icons8.com/fluent/40/000000/gmail.png" />
        </div>
    )
}

export default mail;