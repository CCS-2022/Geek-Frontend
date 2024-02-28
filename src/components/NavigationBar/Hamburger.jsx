import { useState } from "react";
import classes from "./Hamburger.module.css";
import { AnimatePresence, motion } from "framer-motion";
import NavigationLinks from "./NavigationLinks";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={classes.hamburger} onClick={handleClick}>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
          className={classes["hamburger-line"]}
        ></motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          className={classes["hamburger-line"]}
        ></motion.span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
          className={classes["hamburger-line"]}
        ></motion.span>
      </div>

      <AnimatePresence wait>
        {isOpen && (
          <motion.div
            className={classes.menu}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: isOpen ? 0.9 : 0, x: isOpen ? 0 : 200 }}
            transition={{ type: "spring", stiffness: 50 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <motion.h1 className={classes["menu-title"]}>Menu</motion.h1>
            <NavigationLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Hamburger;
