import React, { createContext, useContext, useState } from 'react';
import sublinks from '../../data/sublinks';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <AppContext.Provider value={{ isSubmenuOpen, isSidebarOpen, openSubmenu, closeSubmenu, openSidebar, closeSidebar, page, location }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };