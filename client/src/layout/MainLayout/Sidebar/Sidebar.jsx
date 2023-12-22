import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.Sidebar}>
      <RouterLink to="/books">
        <MaterialLink>All Books</MaterialLink>
      </RouterLink>
    </nav>
  );
}

export default Sidebar;
