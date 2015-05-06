// logger interface
interface ILogger {
    log(message: string);
}


// logger implementation that uses Console
class ConsoleLogger implements ILogger {

    log(message: string) {
		console.log(message);
	}
}


var logger: ILogger;

logger = new ConsoleLogger();
logger.log("Hello");