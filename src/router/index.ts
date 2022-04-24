import React from "react";
import { Event } from '../pages/event/event';
import { Login } from '../pages/login/login';

interface IRoute {
    path: string;
    component: React.ComponentType
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
    EVERY = '*'
}

export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.EVENT,
        component: Event
    },
    {
        path: RouteNames.EVERY,
        component: Event
    },
]

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: Login
    },
    {
        path: RouteNames.EVERY,
        component: Login
    }
]