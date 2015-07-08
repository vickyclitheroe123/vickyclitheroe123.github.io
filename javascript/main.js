$(document).ready(function () {

	console.log("brian ");
    $("body").queryLoader2(   
    		 barColor: "#efefef",
             backgroundColor: "#111",
             percentage: true,
             barHeight: 1,
             completeAnimation : "fade",
             minimumTime: 20000,
             fadeOutTime: 1000);
});