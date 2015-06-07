$(document).ready(function(){

	console.log("it works.");
	
	var lab = [
		[".0_0",".0_1",".0_2",".0_3",".0_4",".0_5",".0_6",".0_7"],
		[".1_0",".1_1",".1_2",".1_3",".1_4",".1_5",".1_6",".1_7"],
		[".2_0",".2_1",".2_2",".2_3",".2_4",".2_5",".2_6",".2_7"],
		[".3_0",".3_1",".3_2",".3_3",".3_4",".3_5",".3_6",".3_7"],
		[".4_0",".4_1",".4_2",".4_3",".4_4",".4_5",".4_6",".4_7"],
		[".5_0",".5_1",".5_2",".5_3",".5_4",".5_5",".5_6",".5_7"],
		[".6_0",".6_1",".6_2",".6_3",".6_4",".6_5",".6_6",".6_7"],
		[".7_0",".7_1",".7_2",".7_3",".7_4",".7_5",".7_6",".7_7"]
	];
	
	console.log(lab[1][3]);
	
	
	//Randomly set a starting x and y location
	//IMPORTANT: If you change the array size, also change the min/max values here
	var locx = Math.floor(Math.random() * 8);
	
	var locy = Math.floor(Math.random() * 8);
	
	console.log("x=" + locx);
	console.log("y=" + locy);
	
	
	
	
	
	
	
	//functions to show or hide divs
	var hide = function(y){
		console.log(y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log(y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	
	
	//functions to add and remove light
	var light = function(y){
		console.log("light" + y)
		$(y).removeClass("dim");
		$(y).removeClass("dark");
		$(y).addClass("light");
	}
	
	var dim = function(y){
		console.log("light" + y)
		$(y).removeClass("dark");
		$(y).removeClass("light");
		$(y).addClass("dim");
	}
	
	
	

		
	
	//light the initial position
	light(lab[locy][locx]);
	
	//check to make sure that squares adjacent to the start position exist
	//then make them dim
	//IMPORTANT: Change these min and max values if you change the array size!
		
	var setdim = function(){
		if(locy < 7){
			dim(lab[locy + 1][locx]);
		}
		
		if(locy > 0){
			dim(lab[locy - 1][locx]);
		}
		
		if(locx < 7){
			dim(lab[locy][locx + 1]);
		}
		
		if(locx > 0){
			dim(lab[locy][locx - 1]);
		}
	}
	
	setdim();
	
	
	
	

	$(lab[locy + 1][locx]).click(function(){
		locy = locy + 1;
		light(lab[locy][locx]);
		setdim();
	});
	
	
	
	
	
	
	
	
	
	
});