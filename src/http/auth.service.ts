import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/auth-response";
import $api from "./axios";

export default class AuthService {
	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return await $api.post<AuthResponse>(`http://localhost:3001/user/login`, {
			email,
			password,
		});
	}
	static async registration(
		email: string,
		password: string,
		name: string,
		timezone: number
	): Promise<AxiosResponse<AuthResponse>> {
		console.log(timezone);
		
		return $api.post<AuthResponse>(`http://localhost:3001/user/registration`, {
			email,
			password,
			name,
			timezone,
		});
	}
	static async logout() {
		return $api.post(`http://localhost:3001/user/logout`);
	}
}
