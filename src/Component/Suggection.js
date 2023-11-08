import { Fragment } from "react";
import Button from "./Button";
import classes from './Button.module.css';



const Suggection = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <h1>Offers on chocolates</h1>
                <h2>Get 5% Offer</h2>
                <h3>any Chocolate items</h3>
                <Button />
            </div>

        </Fragment>
    )
}
export default Suggection;