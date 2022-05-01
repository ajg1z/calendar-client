import { IError } from "./../../../models/error";
import { AuthActionEnum, AuthActions, AuthState } from "./types";
const initialState: AuthState = {
  auth: true,
  user: { password: "", email: "" },
  errors: {} as IError,
  isLoading: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AuthActionEnum.SET_ERROR:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

    case AuthActionEnum.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case AuthActionEnum.SET_AUTH:
      return {
        ...state,
        auth: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
