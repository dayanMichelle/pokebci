import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { SideBar } from "../components/sidebar/SideBar";
import styles from "./Layout.module.css";

export const Layout = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className="layout">
      <header className={styles.header}>
        <NavBar show={show} handleShow={handleShow} />
      </header>
      <main className={styles.main}>
        <SideBar show={show} />
        <Outlet />
      </main>
    </div>
  );
};
