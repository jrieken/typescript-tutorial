
interface ILogger {
    void log(String message);
}

class ConsoleLogger implements ILogger {
    public void log(String message) {
        System.out.println(message);
    }
}

class Program {

    public static void main(String[] args) {
        ILogger logger = new ConsoleLogger();

        logger.log("Hello");
    }
}