export abstract class LoggerService {
	abstract log(msg: string, data?: any): void
}