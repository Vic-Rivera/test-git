var $ = function(id) {
	return document.getElementById(id);
}

var turn = 0;

function mark(){

	if($("b1").value == "" && turn == 0){
		$("b1").value = 'X';
		turn++;
		//return check.value = 'X';
	}
	
}


/*
window.onload = function(){
	//$("b1").onclick = mark;

}*/