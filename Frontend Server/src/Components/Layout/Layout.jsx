import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import NavBar from '../NavBar/NavBar';
import styles from '../Layout/Layout.module.css';
import DarkMode from '../DarkMode/DarkMode';

export default function Layout() {
  return (
    <div className={`${styles.layout} container-fluid m-0 py-5`}>
      <div className={`${styles.overlay}`}></div>
      <div className="row">
        <NavBar />
        <div className={`col-auto p-0 `}>
          <SideBar />

          {/* <DarkMode /> */}


        </div>
        <div className={` col col-md-9    ${styles.contentContainer} `}>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
