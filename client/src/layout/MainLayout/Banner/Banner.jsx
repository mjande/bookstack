import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <nav className={styles.Banner}>
      <Link to="/">Home</Link>
      <Link to="/users/register">
        <Button color="info" variant="contained">
          Register
        </Button>
      </Link>
    </nav>
  );
}

export default Banner;
