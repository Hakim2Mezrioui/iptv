import { redirect, useNavigate } from "react-router-dom";
import IptvContext from "../context/Iptv";
import classes from "./Admin.module.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

let Admin = () => {
    const ctx = useContext(IptvContext);
    const [emailVal, setemailVal] = useState();
    const [passwordVal, setpasswordVal] = useState();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();


    useEffect(() => {
        ctx.checkAdminPage(true);
        onCheckValues();
    }, []);


    const onCheckValues = () => {
        setemailVal(email.current.value);
        setpasswordVal(password.current.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(email.current.value === "" || password.current.value === "") {
            Swal.fire({
                icon: "warning",
                text: "You should insert your email and your passowrd"
            })
            return;
        }
        console.log(navigate("/dashboard"));
    }

    const onCancel = () => {
        Swal.fire({
            icon: "info",
            text: "Are you sure",
            preConfirm: () => navigate("/"),
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonText: "Yes"
        })
    }


    return (
        <React.Fragment>
            <div className={classes.backGround}></div>
            <form className={classes["form-auth"]} onSubmit={onSubmitHandler}>
                <span></span>
                <div className={classes["form-group"]}>
                    <input id="email" onBlur={onCheckValues} ref={email} />
                    <label htmlFor="email" className={`${emailVal === "" ? "" : classes.notEmpty}`}>Email</label>
                </div>
                <div className={classes["form-group"]}>
                    <input onBlur={onCheckValues} id="password" type="password" ref={password} />
                    <label htmlFor="password" className={`${passwordVal === "" ? "" : classes.notEmpty}`}>Password</label>
                </div>
                <div className={classes["form-buttons"]}>
                    <button >Confirm</button>
                    <button onClick={onCancel} type="button">Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Admin;