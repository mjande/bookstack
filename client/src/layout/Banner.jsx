import { Link } from "react-router-dom";

import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.Banner}>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Banner;
