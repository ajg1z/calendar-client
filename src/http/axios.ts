import axios from "axios";
import { AuthResponse } from "../models/response/auth-response";
const base_url_server = "http://localhost:3001/";

const $api = axios.create({
	withCredentials: true,
	baseURL: base_url_server,
});

$api.interceptors.request.use((config) => {
	config.headers!.Authtorization = `Bearer ${sessionStorage.getItem("token")}`;
	return config;
});

$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				const userData = await axios.get<AuthResponse>(
					"http://localhost:3001/user/refresh",
					{
						withCredentials: true,
					}
				);
				sessionStorage.setItem("token", userData.data.accessToken);
				return $api.request(originalRequest);
			} catch (e) {
				console.log(e);
			}
		}
		throw error;
	}
);

export default $api;
