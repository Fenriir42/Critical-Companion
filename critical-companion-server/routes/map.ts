import { Route } from '../type';
import auth from './auth/auth';
import User from './User/User';
import Game from './Game/Game';
import suite from './suite'

const routes: Route[]= [
    {
        path: '/',
        method: 'get',
        handler: [suite],
        auth: false
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
    {
        path: '/user/list',
        method: 'get',
        handler: [User.List],
        auth: true
    },
    {
        path: '/user/read/:id',
        method: 'get',
        handler: [User.Read],
        auth: true
    },
    {
        path: '/user/delete/:id',
        method: 'delete',
        handler: [User.Delete],
        auth: true
    },
    {
        path: '/user/update/:id',
        method: 'put',
        handler: [User.Update],
        auth: true
    },
    {
        path: '/game/list',
        method: 'get',
        handler: [Game.List],
        auth: true
    },
    {
        path: '/game/list/:id',
        method: 'get',
        handler: [Game.ListUser],
        auth: true
    },
    {
        path: '/game/read/:id',
        method: 'get',
        handler: [Game.Read],
        auth: true
    },
    {
        path: '/game/delete/:id',
        method: 'delete',
        handler: [Game.Delete],
        auth: true
    },
    {
        path: '/game/update/:id',
        method: 'put',
        handler: [Game.Update],
        auth: true
    },
    {
        path: '/game/create',
        method: 'post',
        handler: [Game.Create],
        auth: true
    },
];

export default routes;
