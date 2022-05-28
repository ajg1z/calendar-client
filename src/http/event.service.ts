import { IEvent, IEventUpdate } from "../models/event";
import { EventResponse } from "../models/response/event-response";
import $api from "./axios";

export class EventService {
	static async getEvents(): Promise<EventResponse[]> {
		const events = await $api.get("event");
		return events.data;
	}
	static async addEvent(event: IEvent): Promise<EventResponse> {
		const newEvent = await $api.post("event", event);
		return newEvent.data;
	}
	static async removeEvent(id: string | string[]): Promise<EventResponse[]> {
		const removedEvent = await $api.delete<EventResponse[]>("event", {
			data: {
				id,
			},
		});
		return removedEvent.data;
	}

	static async updateEvent(
		id: string,
		updateData: IEventUpdate
	): Promise<EventResponse> {
		return await (
			await $api.put("event", { id, payload: updateData })
		).data;
	}
}
