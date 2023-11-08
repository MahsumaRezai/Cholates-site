import { Fragment } from "react";
import Button from "./Button";
import classes from './Button.module.css';
import img from './images/offer-img.png'


const Suggection = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <h1 className={classes.title}>Offers on chocolates</h1>
                <p className={classes.text}>Get 5% Offer <br></br>any Chocolate items</p>
                <Button />
                <img src={img} alt="" className={classes.assest} />

            </div>


        </Fragment>
    )
}
export default Suggection;