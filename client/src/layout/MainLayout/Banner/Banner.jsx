import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  // If user is not logged in, buttons should be log in or register
  // If user is logged in, buttons should be edit user or log out

  const isLoggedIn = !!localStorage.getItem("accessToken");

  return (
    <nav className={styles.Banner}>
      <Link to="/">Home</Link>
      <div className={styles.rightLinks}>
        {isLoggedIn ? (
          <>
            <Link to="/users/edit">
              <Button color="info" variant="outlined">
                Edit User
              </Button>
            </Link>
            <Link to="/users/logout">
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
