import React from 'react';
import SideBar from './SideBar';
import './SideModal.css';

export default function SideModal() {
    return (
        <>
            <main>
                <button class="sidebar-toggle">

                </button>
                <button class="btn">show modal</button>
            </main><div class="modal-overlay"><div class="modal-container"><h3>modal content</h3><button class="close-modal-btn"></button></div></div>
            <SideBar />
        </>
    )
}
