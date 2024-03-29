import IptvContext from "../context/Iptv";
import classes from "./Admin.module.css";
import React, { useContext, useEffect } from "react";

let Admin = () => {
    const ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkAdminPage(true);
    }, []);

    return (
        <React.Fragment>
            <div className={classes.backGround}></div>
            <form className={classes["form-auth"]}>
                <div className={classes["form-group"]}>
                    <label>UserName</label>
                    <input />
                </div>
                <div className={classes["form-group"]}>
                    <label>Password</label>
                    <input />
                </div>
                <div>
                    <button>Send</button>
                    <button>Cancel</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Admin;