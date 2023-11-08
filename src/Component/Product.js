import { Fragment } from "react";
import classes from './pro.module.css';
import img2 from './images/chocolate1.png';
import img3 from './images/chocolate2.png';
import img4 from './images/chocolate3.png';

const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.products}>
                    <h1 className={classes.title}>Our chocolate products</h1>

                    <div className={classes.pro}>
                        <img src={img2} alt="" className={classes.images} />
                        <button className={classes.button}>
                            <span className={classes.btn}>Buy Now</span></button>

                    </div>
                    <div className={classes.pro}>
                        <img src={img3} alt="" className={classes.images} />
                        <button className={classes.button}>
                            <span className={classes.btn}>Buy Now</span></button>

                    </div>
                    <div className={classes.pro}>
                        <img src={img4} alt="" className={classes.images} />
                        <button className={classes.button}>
                            <span className={classes.btn}>Buy Now</span></button>

                    </div>

                </div>
            </div>


        </Fragment>
    )
}
export default Product;