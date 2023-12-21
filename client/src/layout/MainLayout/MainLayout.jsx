import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <>
      <header>
        <Banner />
      </header>
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}
