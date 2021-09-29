import birthday from './images/birthday.webp';
import trips from './images/trips.webp';
import reviews from './images/reviews.webp';
import accordion from './images/accordion.webp';
import menu from './images/menu.webp';
import tabs from './images/tabs.webp';
import slider from './images/slider.webp';
import lorem from './images/lorem.webp';
import color from './images/color.webp';
import grocery from './images/grocery.webp';
import navbar from './images/navbar.png';
import sidebar from './images/sidebar.png';
import stripe from './images/stripe.webp';
import cart from './images/cart.webp';
import cocktail from './images/cocktail.webp';
import BirthdayReminder from '../../components/BirthdayReminder/BirthdayReminder';
import Trips from '../../components/Trips/Trips';
import CockTails from '../../components/CockTails/CockTails';
import StripeMenu from '../../components/StripeMenu/StripeMenu';
import Reviews from '../../components/Reviews/Reviews';
import Accordion from '../../components/Accordion/Accordion';
import Menu from '../../components/Menu/Menu';
import Tabs from '../../components/Tabs/Tabs';
import Slider from '../../components/Slider/Slider';
import LoremIpsum from '../../components/LoremIpsum/LoremIpsum';
import ColorGenerator from '../../components/ColorGenerator/ColorGenerator';
import GroceryBud from '../../components/GroceryBud/GroceryBud';
import CartMain from '../../components/Cart/CartMain';
import SideModalMain from '../../components/SideModal/SideModalMain';
import Navbar from '../../components/Navbar/Navbar';

const projects = [
    {
        id: 1,
        title: "Birthday Reminder",
        image: birthday,
        component: BirthdayReminder,
    }, {
        id: 2,
        title: "Trips",
        image: trips,
        component: Trips,
    }, {
        id: 3,
        title: "Reviews",
        image: reviews,
        component: Reviews,
    }, {
        id: 4,
        title: "Accordion",
        image: accordion,
        component: Accordion,
    }, {
        id: 5,
        title: "Menu",
        image: menu,
        component: Menu,
    }, {
        id: 6,
        title: "Tabs",
        image: tabs,
        component: Tabs,
    }, {
        id: 7,
        title: "Slider",
        image: slider,
        component: Slider,
    }, {
        id: 8,
        title: "Lorem Ipsum Generator",
        image: lorem,
        component: LoremIpsum,
    }, {
        id: 9,
        title: "Color Shades Generator",
        image: color,
        component: ColorGenerator,
    }, {
        id: 10,
        title: "Grocery Bud",
        image: grocery,
        component: GroceryBud,
    }, {
        id: 11,
        title: "Navbar",
        image: navbar,
        component: Navbar,
    }, {
        id: 12,
        title: "Modal And Sidebar",
        image: sidebar,
        component: SideModalMain,
    }, {
        id: 13,
        title: "Stripe Submenus",
        image: stripe,
        component: StripeMenu,
    }, {
        id: 14,
        title: "Cart",
        image: cart,
        component: CartMain,
    }, {
        id: 15,
        title: "Cocktails",
        image: cocktail,
        component: CockTails,
    },
]

export default projects;