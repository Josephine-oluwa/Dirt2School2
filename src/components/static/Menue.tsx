
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu "
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-[200px] flex  px-3 py-2 bg-transparent justify-end "
      >
        <motion.div
          variants={{
            open: { rotate: 0 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <div className="text-[24px]">
            {" "}
            <BiMenu />
          </div>
        </motion.div>
      </motion.button>
      <motion.ul
        className="bg-[#e2e2e2c5] mt-3 w-[200px] px-1 py-1"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <a href="/auth/signin">
          <motion.li
            variants={itemVariants}
            className="py-2 px-1 hover:bg-white cursor-pointer justify-center flex items-center rounded-sm"
          >
            Signin
          </motion.li>
        </a>

        <a href="/auth/register">
          <motion.li
            variants={itemVariants}
            className="py-2 px-1 justify-center flex items-center hover:bg-white cursor-pointer rounded-sm"
          >
            Signup
          </motion.li>
        </a>
        <Link to="/services">
          <motion.li
            variants={itemVariants}
            className="py-2 px-1 justify-center flex items-center hover:bg-white cursor-pointer rounded-sm"
          >
            Services
          </motion.li>
        </Link>
        <Link to="/about" id="about">
          <motion.li
            variants={itemVariants} id="aboutus"
            className="py-2 px-1 justify-center flex items-center hover:bg-white cursor-pointer rounded-sm"
          >
            About{" "}
          </motion.li>
        </Link>
        <Link to="/contact">
          <motion.li
            variants={itemVariants}
            className="py-2 px-1 justify-center flex items-center hover:bg-white cursor-pointer rounded-sm"
          >
            Contact Us
          </motion.li>
        </Link>
      </motion.ul>
    </motion.nav>
  );
}
