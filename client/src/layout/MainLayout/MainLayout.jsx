import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./MainLayout.module.css";

export default function MainLayout({ setCurrentUser }) {
  return (
    <>
      <header>
        <Banner setCurrentUser={setCurrentUser} />
      </header>
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}
