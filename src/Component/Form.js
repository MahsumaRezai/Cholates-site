import { Fragment } from 'react';
import img from './images/client-chocolate.png'
import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');
    const [namecheck, setnamecheck] = useState(false);
    const [phonecheck, setphonecheck] = useState(false);
    const [emailcheck, setemailcheck] = useState(false);
    const [massagecheck, setmassagelcheck] = useState(false);


    const FormHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setnamecheck(true)
        }
        else if (name.trim().length !== 0) {
            alert("Thank you for your submation")

        }
        if (phone.trim().length === 0) {
            setphonecheck(true)
        }
        else if (phone.trim().length !== 0) {
            alert("Thank you for your submation")

        }
        if (email.trim().length === 0) {
            setemailcheck(true)
        }
        else if (email.trim().length !== 0) {
            alert("Thank you for your submation")

        }
        if (massage.trim().length === 0) {
            setmassagelcheck(true)
        }
        else if (massage.trim().length !== 0) {
            alert("Thank you for your submation")

        }
    }
    const Namehandler = (event) => {
        setName(event.target.value);
    }
    const Phonehandler = (event) => {
        setPhone(event.target.value);
    }
    const Emailhandler = (event) => {
        setEmail(event.target.value);
    }
    const Massagehandler = (event) => {
        setMassage(event.target.value);
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
                        <input type="text" placeholder="Full Name " onChange={Namehandler} />
                        {namecheck && <p>Plases enter your name</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" onChange={Phonehandler} />
                        {phonecheck && <p>Plases enter your phone</p>}
                    </div>
                    <div>
                        <input type="email" placeholder="Email" onChange={Emailhandler} />
                        {emailcheck && <p>Plases enter your email</p>}
                    </div>
                    <div>
                        <input type="text" class="message-box" placeholder="Message" onChange={Massagehandler} />
                        {massagecheck && <p>Plases enter your massage</p>}
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