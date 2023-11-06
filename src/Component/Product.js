import { Fragment } from "react";
import classes from './pro.module.css';
import img2 from './images/chocolate1.png';
import img3 from './images/chocolate2.png';
import img4 from './images/chocolate3.png';
import img1 from './images/client-chocolate.png';

const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.products}>
                    <div>
                        <img src={img1} alt="" className={classes.img} />
                    </div>
                    <div>
                        <div>
                            <img src={img2} alt="" className={classes.images} />

                        </div>
                        <div>
                            <img src={img3} alt="" className={classes.images} />

                        </div>
                        <div>
                            <img src={img4} alt="" className={classes.images} />

                        </div>

                    </div>
                </div>

            </div>

        </Fragment>
    )
}
export default Product;