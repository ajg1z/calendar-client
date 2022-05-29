import { IReceiveSharedEvents } from "./../models/event";
import { IEvent, IEventUpdate, ISentSharedEvents } from "../models/event";
import { EventResponse } from "../models/response/event-response";
import $api from "./axios";

export class EventService {
	static async getEvents(): Promise<EventResponse[]> {
		const events = await $api.get("event");
		return events.data;
	}

	static async getReceiveEvents(): Promise<IReceiveSharedEvents[]> {
		const events = (
			await $api.get<IReceiveSharedEvents[]>("shared-event/receive")
		).data;
		return events;
	}

	static async getSentEvents(): Promise<ISentSharedEvents[]> {
		const events = (await $api.get<ISentSharedEvents[]>("shared-event/sent"))
			.data;
		return events;
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

	static async shareEvent(email: string, events: string[]) {
		return await (
			await $api.post("shared-event", { email, events })
		).data;
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
