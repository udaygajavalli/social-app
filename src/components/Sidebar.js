import React from 'react';
import './Sidebar.css'; // Optional for styling
import { MdOutlineOndemandVideo, MdOutlineCalendarMonth, MdNotificationsNone, MdOutlinePeopleOutline, MdLogout, MdSearch } from 'react-icons/md';
import { TbPhoto, TbSettings } from 'react-icons/tb';
import { CiGrid42 } from 'react-icons/ci';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{ fontFamily: 'monospace', textAlign: 'center', fontWeight: 'lighter' }}>Connecto</h2>
      <div className="profile">
        <img
          src="https://th.bing.com/th/id/OIP.W6359b4k-YhLg54S3GVKjQHaHa?w=546&h=546&rs=1&pid=ImgDetMain"
          alt="User Profile"
          className="profile-image"
        />
        <h4 className="name">Aanya Chalotra</h4>
        <p className="username">@aanya345</p>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <CiGrid42 />
            <a href="/">Feed</a>
          </li>
          <li>
            <MdOutlinePeopleOutline />
            <a href=""> Friends</a>
          </li>
          <li>
            <MdOutlineCalendarMonth />
            <a href=""> Events</a>
          </li>
          <li>
            <MdOutlineOndemandVideo />
            <a href=""> Watch Videos</a>
          </li>
          <li>
            <TbPhoto />
            <a href="">Photos</a>
          </li>
          <li>
            <MdNotificationsNone />
            <a href=""> Notifications</a>
          </li>
          <li>
            <TbSettings />
            <a href=""> Settings</a>
          </li>
          <hr></hr>
          <li>
            <MdLogout />
            <a
              className="logout"
              href=""
            >
              {' '}
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
