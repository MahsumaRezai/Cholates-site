import classes from './Footer.module.css'

const Footer = (props) => {
    return (
            <div className={classes.footer} >
                        <input type="text" class="message-box" placeholder="Message" />
                        <button className={classes.button}>
                            send
                        </button>
                        </div>
          
    )
}
export default Footer;