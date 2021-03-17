import GuestLayout from "../../components/layouts/guest/GuestLayout";
import Guest from "./Guest";

import guest from '../../middleware/guest';

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Guest,
        meta: {
            layout: GuestLayout,
            middleware: [ guest ]
        }
    },
];

export default routes;