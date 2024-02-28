import classes from "./Navigation.module.css";

import { motion } from "framer-motion";
import NavigationLinks from "./NavigationLinks";
import Hamburger from "./Hamburger";
import { useState } from "react";

export default function Navigation() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className={classes.header}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 * 10 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        whileHover={{ rotate: 360 }}
        className={classes.logo}
      >
        Geek
      </motion.div>
      <div className={classes["header-navlinks"]}>
        <NavigationLinks />
      </div>
      <motion.div className={classes["header-hamburger"]}>
        <Hamburger />
      </motion.div>
    </motion.header>
  );
}
