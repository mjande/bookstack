import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.Sidebar}>
      <Link to="/books">All Books</Link>
    </nav>
  );
}

export default Sidebar;
