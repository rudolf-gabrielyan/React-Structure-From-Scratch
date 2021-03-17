import AuthRoutes from '../views/auth/auth-routes';
import GuestRoutes from '../views/guest/guest-routes';

const router = {
    routes: [
        ...GuestRoutes,
        ...AuthRoutes
    ]
}

export default router;