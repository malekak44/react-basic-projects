import React from 'react';
import { AppProvider } from './Context';
import SideModal from './SideModal';

export default function SideModalMain() {
    return (
        <AppProvider>
            <SideModal />
        </AppProvider>
    )
}