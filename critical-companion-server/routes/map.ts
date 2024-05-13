import notYetImplemented from '../middleware/notYetImplemented';
import { Route } from '../type';
import auth from './auth/auth';
import suite from './suite'

const routes: Route[]= [
    {
        path: '/',
        method: 'get',
        handler: [suite],
        auth: false
    },
    {
        path: '/management',
        method: 'post',
        handler: [notYetImplemented],
        auth: true
    },
    {
        path: '/register',
        method: 'post',
        handler: [auth.register],
        auth: false
    },
    {
        path: '/login',
        method: 'post',
        handler: [auth.login],
        auth: false
    },
];

export default routes;
