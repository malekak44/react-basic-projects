import React from 'react';
import logo from './logo.svg';
import { social } from '../../data/nav';
import { useGlobalContext } from './Context';
import { FaHome, FaUserFriends, FaFolderOpen, FaCalendarAlt, FaWpforms, FaTimes } from 'react-icons/fa';

export default function SideBar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="coding" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                <li><a href="/"><FaHome />home</a></li>
                <li><a href="/team"><FaUserFriends />team</a></li>
                <li><a href="/projects"><FaFolderOpen />projects</a></li>
                <li><a href="/calendar"><FaCalendarAlt />calendar</a></li>
                <li><a href="/documents"><FaWpforms />documents</a></li>
            </ul>
            <ul className="social-icons">
                {social.map((link) => {
                    const { id, url, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}