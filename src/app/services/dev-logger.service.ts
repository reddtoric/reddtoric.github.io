import { Injectable } from "@angular/core";
import { LoggerService } from "app/interfaces/logger-service.interface";

@Injectable()
export class DevLoggerService implements LoggerService {
	log(msg: string, data?: any): void {
		console.log(`[DEV] ${msg}`, data);
	}

	warn(msg: string, data?: any): void {
		console.log(`[DEV-WARN] ${msg}`, data);
	}
}