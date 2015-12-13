package demo;

// logger interface
interface ILogger {
    void log(String message);
}


// logger implementation that uses Console
class ConsoleLogger implements ILogger {

    public void log(String message) {
        System.out.println(message);
    }
}

class Program {

    public static void main(String[] args) {
        ILogger logger = new ConsoleLogger();

        logger.log("Hello");
        logger.log("World");
    }
}
