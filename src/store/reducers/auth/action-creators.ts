import { AppDispatch } from './../../index';
import { AuthActionEnum, SetUser, SetLoading, SetError, SetAuth } from './types';
import { IUser } from './../../../models/user';
import { IError } from '../../../models/error';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUser => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setLoading: (loading: boolean):
        SetLoading => ({ type: AuthActionEnum.SET_LOADING, payload: loading }),
    setError: (error: IError):
        SetError => ({ type: AuthActionEnum.SET_ERROR, payload: error }),
    setAuth: (isAuth: boolean):
        SetAuth => ({ type: AuthActionEnum.SET_AUTH, payload: isAuth }),
    login: (email: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true))


        }
        catch (e: any) {
            dispatch(AuthActionCreators.setError(e))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {

    }
}


