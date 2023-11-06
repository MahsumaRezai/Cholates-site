import { Fragment } from "react";
import Card from './Card.js';
import img from './images/slider-img.png';
import classes from './Home.module.css'


const Home = (props) => {
    return (
        <Fragment>
            <Card>
                <div>
                    <img src={img} alt="" className={classes.img} />
                    <h1>Chocolate</h1>
                </div>

            </Card>

        </Fragment>
    )
}
export default Home;