namespace Demo
{
    // logger interface
    interface ILogger
    {
        void Log(string message);
    }

    // logger implementation that uses Console
    class ConsoleLogger : ILogger
    {
        public void Log(string message)
        {
            System.Console.WriteLine(message);
        }
    }

    class Program
    {
        public static void Main(string[] args)
        {
            ILogger logger;
            logger = new ConsoleLogger();
            logger.Log("Hello");
            logger.Log("World");
        }
    }
}




































//     class NotAConsoleLogger
//     {
//     	public void Log(string message)
//         {
//             System.Console.WriteLine(message);
//         }
//     }