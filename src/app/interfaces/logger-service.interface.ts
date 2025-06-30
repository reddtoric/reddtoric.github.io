export abstract class LoggerService {
	abstract log(msg: string, ...data: any): void
	abstract warn(msg: string, ...data: any): void
	abstract error(msg: string, ...data: any): void
}