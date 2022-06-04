import { EventsActionCreator } from "./../events/action-creators";
import { ConvertTime } from "./../../../utils/time";
import { AppDispatch } from "./../../index";
import {
	AuthActionEnum,
	SetUser,
	SetLoading,
	SetError,
	SetAuth,
	SetLoadingGlobal,
} from "./types";
import { IUser } from "./../../../models/user";
import { IError } from "../../../models/error";
import AuthService from "../../../http/auth.service";
import axios from "axios";

export const AuthActionCreators = {
	setUser: (user: IUser): SetUser => ({
		type: AuthActionEnum.SET_USER,
		payload: user,
	}),
	setLoading: (loading: boolean): SetLoading => ({
		type: AuthActionEnum.SET_LOADING,
		payload: loading,
	}),
	setLoadingGlobal: (loading: boolean): SetLoadingGlobal => ({
		type: AuthActionEnum.SET_LOADING_GLOBAL,
		payload: loading,
	}),
	setError: (error: IError): SetError => ({
		type: AuthActionEnum.SET_ERROR,
		payload: error,
	}),
	setAuth: (isAuth: boolean): SetAuth => ({
		type: AuthActionEnum.SET_AUTH,
		payload: isAuth,
	}),
	login: (email: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setLoading(true));
			const userData = await AuthService.login(email, password);
			sessionStorage.setItem("token", userData.data.accessToken);
			dispatch(AuthActionCreators.setAuth(true));
			dispatch(AuthActionCreators.setUser(userData.data.user));
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e));
		} finally {
			dispatch(AuthActionCreators.setLoading(false));
		}
	},
	checkAuth: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setLoadingGlobal(true));
			const userData = await axios.get("http://localhost:3001/user/refresh", {
				withCredentials: true,
			});
			sessionStorage.setItem("token", userData.data.accessToken);
			dispatch(AuthActionCreators.setAuth(true));
			dispatch(AuthActionCreators.setUser(userData.data.user));
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e));
		} finally {
			dispatch(AuthActionCreators.setLoadingGlobal(false));
		}
	},
	registration:
		(email: string, password: string, name: string) =>
		async (dispatch: AppDispatch) => {
			try {
				dispatch(AuthActionCreators.setLoading(true));
				const userData = await AuthService.registration(
					email,
					password,
					name,
					new Date().getHours()
				);
				sessionStorage.setItem("token", userData.data.accessToken);
				dispatch(AuthActionCreators.setAuth(true));
				dispatch(AuthActionCreators.setUser(userData.data.user));
			} catch (e: any) {
				dispatch(AuthActionCreators.setError(e));
			} finally {
				dispatch(AuthActionCreators.setLoading(false));
			}
		},
	logout: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setLoading(true));
			await AuthService.logout();
			dispatch(AuthActionCreators.setAuth(false));
			dispatch(AuthActionCreators.setUser({} as IUser));
			sessionStorage.removeItem("token");
			dispatch(AuthActionCreators.setError({} as IError));
			dispatch(EventsActionCreator.CleanEvents());
			dispatch(EventsActionCreator.SetError({} as IError));
		} catch (e: any) {
			dispatch(AuthActionCreators.setError(e));
		} finally {
			dispatch(AuthActionCreators.setLoading(false));
		}
	},
};
