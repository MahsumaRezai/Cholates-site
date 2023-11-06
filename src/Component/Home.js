import { Fragment } from "react";
import Card from './Card.js';
import img from './images/slider-img.png';
import classes from './Home.module.css'


const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.home}>
                    <div className={classes.images}>
                        <img src={img} alt="" className={classes.img} />

                    </div>
                    <div className={classes.title}>
                        <h1 className={classes.titles}>Chocolate</h1>
                        <p className={classes.text}>Chocolate is very amzing and all people around world like it <br></br> and this is very good for people</p>

                    </div>
                </div>

            </Card>

        </Fragment>
    )
}
export default Home;