import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaTachometerAlt, faHouse,FaFire, FaCheck , FaList, FaUser, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import styles from '../SideBar/SideBar.module.css';

export default function Sidebar() {


  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showIconsOnly, setShowIconsOnly] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Toggle the sidebar
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setShowIconsOnly(!showIconsOnly);
    setCollapsed(!collapsed);
  };

  // The sidebar classes to apply it in some casess
  const sidebarClassNames = `${styles.sidebar} ${sidebarOpen ? '' : styles.closed} ${collapsed ? styles.collapsed : ''}`;

  return (
    <div className={sidebarClassNames}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarToggle} onClick={handleToggleSidebar}>
          {/* Toggle sidebar button */}
          {sidebarOpen ? (
            <FaAngleDoubleLeft className={styles.sidebarToggleIcon} />
          ) : (
            <FaAngleDoubleRight className={styles.sidebarToggleIcon} />
          )}
          {!showIconsOnly && <div className={styles.sidebarTitle}>Pro Sidebar</div>}
        </div>
      </div>
      <div className={`${styles.sidebarMenu} ${sidebarOpen ? '' : styles.menuClosed} ${showIconsOnly ? styles.showIconsOnly : ''}`}>
        <ul>
          <li>

            <NavLink to="/" exact activeClassName="active" className={styles.sidebarLink}>
              <FaTachometerAlt className={styles.sidebarIcon} />
              {!showIconsOnly && <span className={styles.sidebarText}>Home</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/PopularNow" activeClassName="active" className={styles.sidebarLink}>
              <FaFire  className={styles.sidebarIcon} />
              {!showIconsOnly && <span className={styles.sidebarText}>Popular Now</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/Games" activeClassName="active" className={styles.sidebarLink}>
              <i class={`${styles.sidebarIcon} fa-solid fa-gamepad`}></i>
              {!showIconsOnly && <span className={styles.sidebarText}>Games</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active" className={styles.sidebarLink}>
              <i class={`${styles.sidebarIcon} fas fa-shopping-cart fa text-white position-relative`}></i>
              {!showIconsOnly && <span className={styles.sidebarText}>CART</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/multilevel" activeClassName="active" className={styles.sidebarLink}>
              <FaList className={styles.sidebarIcon} />
              {!showIconsOnly && <span className={styles.sidebarText}>Multi Level</span>}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.sidebarFooter}>
        <Link to="/profile" className={styles.sidebarLink}>
          <FaUser className={styles.sidebarIcon} />
          {!showIconsOnly && <span className={styles.sidebarText}>My Account</span>}
        </Link>
      </div>
    </div>
  );
}