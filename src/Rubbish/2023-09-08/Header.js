import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping, faBars, faHome, faMemory } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../shared/logo.png";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} width="50" />
                <ul className={classes.links}>
                    <li>
                        <NavLink activeClassName={classes.active} to="/" exact>
                            {/* <FontAwesomeIcon icon={faHome} /> */}
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/iptv-subscription" exact>
                            {/* <FontAwesomeIcon icon={faMemory} /> */}
                            IPTV Subscription
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faCartShopping} title="Cart"/>
                        </a>
                    </li>
                </ul> */}
                <button className={classes.faBars}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
        </header>
    )
}

export default Header;