
$(document).ready(function() {

	var lastTimeoutHandle: number;

	$("p").click(function() {
        $(this).hide();

		clearTimeout(lastTimeoutHandle);

		lastTimeoutHandle = setTimeout(function() {
			$("body").find("p").show();
		}, 1000);
    });
});
