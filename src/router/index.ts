import React from "react";
import { Calendar } from "../pages/calendar/calendar";
import { Login } from "../pages/login/login";
import { Menu } from "../pages/menu/menu";
import {Events} from '../pages/events/events'
interface IRoute {
	path: string;
	component: React.ComponentType;
}

export enum RouteNames {
	LOGIN = "/login",
	EVENT = "/events",
	EVERY = "*",
	MENU = "/",
	CALENDAR='/calendar'
}

export const privateRoutes: IRoute[] = [
	{
		path: RouteNames.EVENT,
		component: Events,
	},
	{
		path: RouteNames.EVERY,
		component: Menu,
	},
	{
		path: RouteNames.MENU,
		component: Menu,
	},
	{
		path:RouteNames.CALENDAR,
		component:Calendar
	}
];

export const publicRoutes: IRoute[] = [
	{
		path: RouteNames.LOGIN,
		component: Login,
	},
	{
		path: RouteNames.EVERY,
		component: Login,
	},
];

export const labelsRoutes: { [key: string]: string } = {
	calendar: "Calendar",
	setting: "Setting",
	events: "Events",
	home:'Home'
};
