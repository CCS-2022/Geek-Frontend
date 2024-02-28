import classes from "./ButtonUI.module.css";
import { motion } from "framer-motion";

export default function ButtonUI({ className, children, type }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 50 }}
      className={`${classes.btn} ${className}`}
      type={type}
    >
      {children}
    </motion.button>
  );
}
