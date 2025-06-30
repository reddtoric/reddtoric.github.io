import { Injectable } from "@angular/core";

@Injectable()
export class ProdLoggerService {
	log(msg: string, data?: any): void {
		// console.log(`${msg}`, data);
	}
}