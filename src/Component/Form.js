import { Fragment } from 'react';
import img from './images/client-chocolate.png'
import classes from './Form.module.css';

const Form = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <img src={img} alt="" className={classes.img} />
                </div>

                <div className={classes.form}>
                    <h1>Contact Us</h1>
                    <div>
                        <input type="text" placeholder="Full Name " />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" class="message-box" placeholder="Message" />
                    </div>
                    <div>
                        <button className={classes.button}>
                            <span className={classes.btn}>
                                SEND NOW
    
                            </span>
                        </button>
                        
                    </div>
                </div>
            </div>


        </Fragment>
    )

}
export default Form;