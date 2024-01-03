import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Banner.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../App";

function Banner({ setCurrentUser }) {
  const currentUser = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("accessToken");
    setCurrentUser(null);
  }

  return (
    <nav className={styles.Banner}>
      <Link to="/">Home</Link>
      <div className={styles.rightLinks}>
        {currentUser ? (
          <>
            <Link to="/users/edit">
              <Button color="info" variant="outlined">
                Edit User
              </Button>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <Button color="info" variant="contained">
                Log Out
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/users/login">
              <Button color="info" variant="outlined">
                Log In
              </Button>
            </Link>
            <Link to="/users/register">
              <Button color="info" variant="contained">
                Register
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Banner;
