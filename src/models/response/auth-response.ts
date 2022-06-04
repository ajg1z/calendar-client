import { IUser } from "../user";

export interface AuthResponse {
	accessToken: string;
	refreshtoken: string;
	user: IUser;
	setting:string
}
