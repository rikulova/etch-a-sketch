var size = 4;
$(document).ready(function(){
	populate(size);
	sketch();
		 
	
	$("button").click(function(){
		$(".square").remove();
		size  = prompt("How many squares?");
		$("div").css("background-color", "white");
		populate(size);
		sketch();

	});
});

// Functions

function populate(size){
	var area = size * size;
	var squaresize = 500 / size;
	var inpix = squaresize.toString() + "px";
	for (var i = 1; i < area + 1; i++){
		$("#outside").append("<div class='square'></div>");

	};
	$(".square").css("width", inpix);
	$(".square").css("height", inpix);
	console.log(inpix)
};

function sketch(){
	$(".square").mouseenter(function(){
		$(this).css("background-color", "black");
	});
}