import Login from "./login/Login";
import Signup from "./signup/Signup";
import UserLayout from "../../components/layouts/guest/UserLayout";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            layout: UserLayout,
        },
        children: [
            {
                path: '/user',
                name: 'User-Login',
                component: Signup,
            }
        ]
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    }
];

export default routes;