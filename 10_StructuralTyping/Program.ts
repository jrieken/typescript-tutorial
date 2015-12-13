namespace demo {

    // logger interface
    interface ILogger {
        log(message: string);
    }


    // logger implementation that uses Console
    class ConsoleLogger implements ILogger {

        public log(message: string) {
            console.log(message);
        }
    }


    var logger: ILogger;

    logger = new ConsoleLogger();
    logger.log("Hello");
    logger.log("World");
}