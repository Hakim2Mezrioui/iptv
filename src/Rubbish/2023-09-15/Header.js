import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <Link to={"#"}>Home</Link>
                </li>
                <li>
                    <Link to={"#"}>Profile</Link>
                </li>
                <li>
                    <Link to={"#"}>Edit EditAbonnement</Link>
                </li>
            </ul>
            <span>
                <Link to="#">Logout</Link>
            </span>
        </header>
    );
}

export default Header;