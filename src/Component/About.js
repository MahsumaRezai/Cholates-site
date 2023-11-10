import { Fragment } from "react";

import classes from './About.module.css';
import img from './images/about-img.png'

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <div className={classes.texts}>
                    <h2 className={classes.title}>About Our Cholates</h2>
                    <p className={classes.para}>Lorem Ipsum is that it has a more-or-less normal distribution of letters,<br></br>
                        as opposed to using 'Content here, content here', making it look like readable English.<br></br>
                        Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their default
                         model text,</p>


                </div>
                <div>
                    <img alt="" src={img} className={classes.img} />

                </div>


            </div>

        </Fragment>
    )
}
export default About;