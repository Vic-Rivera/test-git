var $ = function(id) {
	return document.getElementById(id);
}

var turn = 1;

function mark1(check){

	if($("b1").value == "" && turn%2 == 0){
		$("b1").value = 'X';
		turn++;
		
	}
	else{
		$("b1").value = 'O';
		turn++;
		
	}
	
}



window.onload = function(){
	$("b1").onclick = mark1;
	$("b2").onclick = mark;

}

//clear function
//game win check
