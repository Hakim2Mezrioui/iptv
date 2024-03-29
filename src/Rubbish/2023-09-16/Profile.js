import React, { useContext, useEffect, useReducer, useRef } from "react";
import classes from "./Profile.module.css";
import IptvContext from "../../context/Iptv";

function checkValidationHandler(state, action) {
    if(action.type === "username") {
        return { value: action.value, isValid: action.isValid, type: action.type }
    }
    if(action.type === "password") {
        return { value: action.value, isValid: action.isValid, type: action.type }
    }
    return {
        value: "",
        isValid: true
    }
}

let Profile = () => {
    const username = useRef();
    const password = useRef();

    const [usernameValidation, dispatchUsername] = useReducer(checkValidationHandler, {
        value: "",
        isValid: true
    });

    const [passwordValidation, dispatchPassword] = useReducer(checkValidationHandler, {
        value: "",
        isValid: true
    });

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const checkValidation = (value) => {
        return value === "" ? false : true;
    }

    const onBlurHandler = (type) => {
        if(type==="username") {
            dispatchUsername({
                value: username.current.value,
                isValid: checkValidation(username.current.value),
                type: "username"
            })
        } else if(type==="password") {
            dispatchPassword({
                value: password.current.value,
                isValid: checkValidation(password.current.value),
                type: "password"
            })
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmitHandler} className="w-50 m-auto mt-5">
                <div>
                    <label className={`badge ${classes["bg-primary"]}`}>username</label>
                    <input ref={username} onBlur={() => onBlurHandler("username")} placeholder="username" className={`form-control ${usernameValidation.isValid && usernameValidation.type === "username" ? "is-valid" : "is-invalid"}`} required />
                </div>
                <div>
                    <label className={`badge ${classes["bg-primary"]}`}>password</label>
                    <input ref={password} onBlur={() => onBlurHandler("password")} placeholder="password" className={`form-control ${passwordValidation.isValid && passwordValidation.type === "password" ? "is-valid" : "is-invalid"}`} />
                </div>
                <div className="mt-3">
                    <button className="btn btn-success">Edit</button> 
                    <span className="px-2">|</span>
                    <button type="button" className="btn btn-outline-danger">Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Profile;