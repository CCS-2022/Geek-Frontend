import { Link, NavLink } from "react-router-dom";
import classes from "./NavigationLinks.module.css";
import ButtonUI from "../ui/ButtonUI";
function NavigationLinks() {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink to="/about" className={classes["list-nav"]}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/join-geek" className={classes["list-nav"]}>
            Join Geek
          </NavLink>
        </li>
        <li>
          <Link to="/login">
            <ButtonUI className={classes["login-btn"]}>Login</ButtonUI>
          </Link>
          {/* <NavLink to="/login" className={classes["list-nav"]}>
            Login
          </NavLink> */}
        </li>
        <li>
          <Link to="/signup">
            <ButtonUI className={classes["signup-btn"]}>Sign Up</ButtonUI>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
