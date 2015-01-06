function populate(number){
	for (var i = 1; i < size; i++){
		$("#outside").append("<div></div>");
	};
};
var size = 17
$(document).ready(function(){
	populate(size);
		 
	$("div").mouseenter(function(){
		$(this).css("background-color", "black");
	});
	$("button").click(function(){
		size  = prompt("How many squares?");
		$("div").css("background-color", "white");
		populate(size + 1);

	});
});