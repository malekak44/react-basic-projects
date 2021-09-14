import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import Modal from './Modal';
import SideBar from './SideBar';
import './SideModal.css';

export default function SideModal() {
    const { openSidebar, openModal } = useGlobalContext();

    return (
        <>
            <main>
                <button className="sidebar-toggle" onClick={openSidebar}>
                    <FaBars />
                </button>
                <button className="btn" onClick={openModal}>show modal</button>
            </main>
            <Modal />
            <SideBar />
        </>
    )
}