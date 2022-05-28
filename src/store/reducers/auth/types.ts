import { IError } from "./../../../models/error";
import { IUser } from "./../../../models/user";
export interface AuthState {
	auth: boolean;
	user: IUser;
	isLoading: boolean;
	errors: IError;
	isLoadingGlobal: boolean;
}

export enum AuthActionEnum {
	SET_AUTH = "SET_AUTH",
	SET_LOADING = "SET_LOADING",
	SET_USER = "SET_USER",
	SET_ERROR = "SET_ERROR",
	SET_LOADING_GLOBAL = "SET_LOADING_GLOBAL",
}

export interface SetLoadingGlobal {
	type: AuthActionEnum.SET_LOADING_GLOBAL;
	payload: boolean;
}

export interface SetAuth {
	type: AuthActionEnum.SET_AUTH;
	payload: boolean;
}

export interface SetUser {
	type: AuthActionEnum.SET_USER;
	payload: IUser;
}

export interface SetError {
	type: AuthActionEnum.SET_ERROR;
	payload: IError;
}

export interface SetLoading {
	type: AuthActionEnum.SET_LOADING;
	payload: boolean;
}

export type AuthActions = SetAuth | SetUser | SetLoading | SetError | SetLoadingGlobal;
