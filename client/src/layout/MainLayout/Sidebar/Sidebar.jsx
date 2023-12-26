import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.Sidebar}>
      <MaterialLink component={RouterLink} to="/books">
        All Books
      </MaterialLink>
    </nav>
  );
}

export default Sidebar;
