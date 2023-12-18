import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Sidebar from "./Sidebar";

function Root() {
  return (
    <>
      <Banner />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Root;
