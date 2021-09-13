import React from 'react';
import logo from './logo.svg';
import { social } from '../../data/nav';
import { FaHome, FaUserFriends, FaFolderOpen, FaCalendarAlt, FaWpforms } from 'react-icons/fa';

export default function SideBar() {
    return (
        <aside class="sidebar show-sidebar">
            <div class="sidebar-header">
                <img src={logo} class="logo" alt="coding" />
                <button class="close-btn">

                </button>
            </div>
            <ul class="links">
                <li><a href="/"><FaHome />home</a></li>
                <li><a href="/team"><FaUserFriends />team</a></li>
                <li><a href="/projects"><FaFolderOpen />projects</a></li>
                <li><a href="/calendar"><FaCalendarAlt />calendar</a></li>
                <li><a href="/documents"><FaWpforms />documents</a></li>
            </ul>
            <ul class="social-icons">
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