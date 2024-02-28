// import { Link } from "react-router-dom";
// import ButtonUI from "../UI/ButtonUI";
// import HomeCTA from "./HomeCTA";
// import HomeImg from "./HomeImg";
import classes from "./HomeIntro.module.css";
import { motion } from "framer-motion";

function HomeIntro() {
  return (
    <div className={classes.intro}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
        className={classes["intro-cta"]}
      >
        <h1>Home Page</h1>
      </motion.div>
    </div>
  );
}

export default HomeIntro;
