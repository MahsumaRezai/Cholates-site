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

                <form action="" className={classes.form}>
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
                    <div class="d-flex ">
                        <button>
                            SEND NOW
                  </button>
                    </div>
                </form>
            </div>


        </Fragment>
    )

}
export default Form;