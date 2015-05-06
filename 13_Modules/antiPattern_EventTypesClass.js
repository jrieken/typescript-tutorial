var EventTypes = (function () {
    function EventTypes() {
    }
    EventTypes.Click = "click";
    EventTypes.mouseCover = "mouseOver";
    return EventTypes;
})();
document.addEventListener(EventTypes.Click, function (e) {
});
