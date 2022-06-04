import { SettingResponse } from "../models/response/setting-response";
import { SettingUpdate } from "../models/setting";
import $api from "./axios";

export class SettingService {
	static async getSetting(): Promise<SettingResponse> {
		return (await $api.get<SettingResponse>("setting")).data;
	}
	
	static async changeSetting(dto: SettingUpdate): Promise<SettingResponse> {
		return await (
			await $api.put("setting", dto)
		).data;
	}
}
