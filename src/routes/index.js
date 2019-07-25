import Home from '../components/pages/home';
import Contact from '../components/pages/contact';

const routes = [
    {
        name: "Accueil",
        path: "/home",
        component: Home
    },
    {
        name: "Destinations",
        path: "/destinations",
        component: Home
    },
    {
        name: "Programme",
        path: "/program",
        component: Home
    },
    {
        name: "Contact",
        path: "/contact",
        component: Contact
    }
];


export  default routes;