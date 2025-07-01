import { Injectable } from "@angular/core";
import { DevLoggerService } from "./dev-logger.service";
import { LoggerService } from "app/interfaces/logger-service.interface";

@Injectable()
export class ProdLoggerService implements LoggerService {
	log(msg: string, ...data: any): void {
		// console.log(`${msg}`, ...data);
	}

	warn(msg: string, ...data: any): void {
		console.log(`[WARN] ${msg}`, ...data);
	}

	error(msg: string, ...data: any): void {
		console.log(`[ERROR] ${msg}`, ...data);
	}
}