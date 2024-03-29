import React, { useRef } from "react";
import classes from "./EditForm.module.css";

let EditForm = (props) => {

    let nameVal = useRef();
    let durationVal = useRef();
    let priceVal = useRef();

    return (
        <React.Fragment>
            <div className={classes.back}></div>
            <form className={classes.editForm}>
                <div  className={classes["form-group"]}>
                <div className={classes.stitic}></div>
                    <label className={classes["form-label"]} htmlFor="name">Name</label>
                    <input className="form-control is-valid" id="name"/>
                </div>
                <div  className={classes["form-group"]}>
                    <label className={classes["form-label"]} htmlFor="duration">Duration</label>
                    <input className="form-control is-valid" id="duration"/>
                </div>
                <div  className={classes["form-group"]}>
                    <label className={classes["form-label"]} htmlFor="price">Price</label>
                    <input className="form-control is-valid" id="price"/>
                </div>
                <div className={classes["form-btns"]}>
                    <button className="btn btn-outline-success">Confirm</button>|
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}


export default EditForm;