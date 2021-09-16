import React from 'react';
import { useParams } from 'react-router-dom';
import BirthdayReminder from '../BirthdayReminder/BirthdayReminder';
import Trips from '../Trips/Trips';
import CockTails from '../CockTails/CockTails';
import StripeMenu from '../StripeMenu/StripeMenu';
import Reviews from '../Reviews/Reviews';
import Accordion from '../Accordion/Accordion';
import Menu from '../Menu/Menu';
import Tabs from '../Tabs/Tabs';
import Slider from '../Slider/Slider';
import LoremIpsum from '../LoremIpsum/LoremIpsum';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import GroceryBud from '../GroceryBud/GroceryBud';
import CartMain from '../Cart/CartMain';
import SideModalMain from '../SideModal/SideModalMain';
import Navbar from '../Navbar/Navbar';
import Error from './Error';

const Project = () => {
    const { title } = useParams();

    switch (title) {
        case "Birthday Reminder":
            return <BirthdayReminder />
        case "Trips":
            return <Trips />
        case "Reviews":
            return <Reviews />
        case "Accordion":
            return <Accordion />
        case "Menu":
            return <Menu />
        case "Tabs":
            return <Tabs />
        case "Slider":
            return <Slider />
        case "Lorem Ipsum Generator":
            return <LoremIpsum />
        case "Color Shades Generator":
            return <ColorGenerator />
        case "Grocery Bud":
            return <GroceryBud />
        case "Navbar":
            return <Navbar />
        case "Modal And Sidebar":
            return <SideModalMain />
        case "Stripe Submenus":
            return <StripeMenu />
        case "Cart":
            return <CartMain />;
        case "Cocktails":
            return <CockTails />
        default:
            return <Error />;
    }
};

export default Project;