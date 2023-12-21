import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <nav className={styles.Banner}>
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Banner;
