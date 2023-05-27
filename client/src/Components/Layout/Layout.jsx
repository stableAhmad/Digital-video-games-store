import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import styles from '../Layout/Layout.module.css';

export default function Layout() {
  return (
    <div className={`${styles.Layout} container-fluid m-0`}>
      <div className="row ">
        <NavBar />
        <div className={`col-auto  p-0 ${styles.sidebarContainer}`}>
          <SideBar />
        </div>
        <div className={`col-10 ${styles.contentContainer}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
