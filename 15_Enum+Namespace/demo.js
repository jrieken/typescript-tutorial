// Stützli-Wösch
var CarWash;
(function (CarWash) {
    CarWash[CarWash["Idle"] = 0] = "Idle";
    CarWash[CarWash["Paid"] = 1] = "Paid";
    CarWash[CarWash["Error"] = 2] = "Error";
})(CarWash || (CarWash = {}));
var CarWash;
(function (CarWash) {
    function start() {
        return CarWash.Idle;
    }
    CarWash.start = start;
    function next(currentState, message) {
        if (currentState === CarWash.Idle && message === "1sfr") {
            return CarWash.Paid;
        }
        if (currentState === CarWash.Paid && message === "water for 1 minute") {
            return CarWash.Idle;
        }
        return CarWash.Error;
    }
    CarWash.next = next;
})(CarWash || (CarWash = {}));
