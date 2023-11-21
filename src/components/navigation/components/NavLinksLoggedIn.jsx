import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const NavLinksLoggedIn = () => {
  const navigate = useNavigate();

  const animtateFrom = { opacity: 0, y: -40 };
  const animtateTo = { opacity: 1, y: 0 };

  const handleLogout = () => {
    localStorage.removeItem("Holidaze_Login_Token");
    localStorage.removeItem("profile");
    navigate(`/`);
    window.location.reload(true);
  };
  return (
    <ul>
      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/">home</Link>
      </motion.li>
      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/venues">venues</Link>
      </motion.li>
      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.15 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/profile">profile</Link>
      </motion.li>
      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/calendar">calendar</Link>
      </motion.li>
      <motion.button
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.25 }}
        className="button_purple"
        onClick={handleLogout}
      >
        logout
      </motion.button>
    </ul>
  );
};

export default NavLinksLoggedIn;
