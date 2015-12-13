var demo;
(function (demo) {
    // logger implementation that uses Console
    var ConsoleLogger = (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function (message) {
            console.log(message);
        };
        return ConsoleLogger;
    })();
    var logger;
    logger = new ConsoleLogger();
    logger.log("Hello");
    logger.log("World");
})(demo || (demo = {}));
