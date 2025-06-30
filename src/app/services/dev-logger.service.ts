import { Injectable } from "@angular/core";

@Injectable()
export class DevLoggerService {
	log(msg: string, data?: any): void {
		console.log(`[DEV] ${msg}`, data);
	}
}