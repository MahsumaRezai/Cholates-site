import { Fragment } from 'react';
import img from './images/client-chocolate.png'
import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');

    const FormHandler=(event)=>{
        event.preventDefault('');
        console.log(name,phone,email,massage)
    }


    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <img src={img} alt="" className={classes.img} />
                </div>

                <form className={classes.form} onSubmit={FormHandler}>
                    <h1>Contact Us</h1>
                    <div>
                        <input type="text" placeholder="Full Name " onChange={setName} />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" onChange={setPhone} />
                    </div>
                    <div>
                        <input type="email" placeholder="Email"  onChange={setEmail}/>
                    </div>
                    <div>
                        <input type="text" class="message-box" placeholder="Message"  onChange={setMassage}/>
                    </div>
                    <div>
                        <button className={classes.button}>
                            <span className={classes.btn}>
                                SEND NOW

                            </span>
                        </button>

                    </div>
                </form>
            </div>


        </Fragment>
    )

}
export default Form;