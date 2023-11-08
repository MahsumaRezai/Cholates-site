import { Fragment } from "react";
import classes from './Button.module.css';



const Button = (props) => {
    return (
        <Fragment>
            <button className={classes.button}>{props.children}
                <span className={classes.btn}>Buy Now</span></button>

        </Fragment>
    )
}
export default Button;