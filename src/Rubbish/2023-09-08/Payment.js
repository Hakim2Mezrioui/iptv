import classes from "./Payment.module.css";
import IptvContext from "../context/Iptv";
import { Fragment, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';


let Payment = () => {
    let ctx = useContext(IptvContext);

    useEffect(() => {
        ctx.checkPaymentPage(true);
    }, []);

    let onSubmitHandler = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Good",
            text: "Your Request Is Sended"
        });
    }
    
    return (
        <Fragment>
            <div>
                <button className={classes.goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Go Back
                </button>
            </div>
            <div className={classes.circle}></div>
            <form className={`${classes.paymentForm}`} onSubmit={onSubmitHandler}>
                <div className="form-group ">
                    <label className="form-label">Name</label>
                    <span className="d-flex gap-3">
                        <input className="form-control" placeholder="First Name" />
                        <input className="form-control" placeholder="Last Name" />
                    </span>
                </div>
                <div className="form-group">
                    <span>
                        <label>Credit Card Number</label>
                        <input className="form-control" placeholder="**** **** **** ****" />
                    </span>
                    <span>
                        <label>CVV</label>
                        <input className="form-control" placeholder="CVV" />
                    </span>
                </div>
                <div className="form-group">
                    <label>Card Expiration</label>
                    <input className="form-control" placeholder="MM / YY" />
                </div>
                <button type="submit" className={`${classes["submitButton"]}`}>Submit</button>   
            </form>
        </Fragment>
    )
}

export default Payment;