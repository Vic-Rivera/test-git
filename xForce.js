var $ = function(id) {
	return document.getElementById(id);
}



function checkForNumber(fieldValue) {
	var numberCheck = isNaN(fieldValue);
	if (numberCheck == true) {
			window.alert("You must enter a numeric value!");
			return false;
	}
}

function checkDay(dayValue) {
	if (dayValue < 1 || dayValue > 31) {
		window.alert("Day must be between 1 and 31.");
		return false;
	}
}

function checkMonth(monthValue) {
	if (monthValue < 1 || monthValue > 12) {
		window.alert("Month must be between 1 and 12.");
		return false;
	}
}

function checkYear(yearValue) {
	if (yearValue < 2014 || yearValue > 2024) {
		window.alert("Year must be between 2014 and 2024.");
		return false;
	}
}

function confirmPassword() {
	if (document.forms[0].confirm_security.value != document.forms[0].password_security.value) {
		$("match_error").firstChild.nodeValue = "*Your passwords do not match";
		documents.forms[0].password_security.focus();
	}
}

function confirmSubmit() {
	
	//confirm Name
	if  (document.forms[0].name_personal.value == "" // works
	||	document.forms[0].name_personal.value == "Name") {
	$("name_error").firstChild.nodeValue = "*Please enter a name.";
	return false;
	}
	
	//confirm Email
	if	(document.forms[0].email_personal.value == ""
	||	document.forms[0].email_personal.value == "E-Mail") {
	$("email_error").firstChild.nodeValue = "*Please enter an email address.";
	return false;
	}
	
	//confirm date
	if	(document.forms[0].month.value == ""
	|| isNaN(document.forms[0].month.value) 
	|| document.forms[0].day.value == ""
	|| isNaN(document.forms[0].day.value)
	|| document.forms[0].year.value == ""
	|| isNaN(document.forms[0].year.value)) {
	$("date_error").firstChild.nodeValue = "*Date required. Number values only";
	return false;
	}
	
	//confirm phone, both for empty and nan. nan func will pop up and this will display as well
	if	(document.forms[0].area.value == ""
	|| isNaN(document.forms[0].area.value)
	|| document.forms[0].exchange.value == ""
	|| isNaN(document.forms[0].exchange.value)
	|| document.forms[0].phone.value == ""
	|| isNaN(document.forms[0].phone.value)) {
	$("phone_error").firstChild.nodeValue = "*Phone Number required. Number values only";
	return false;
	}
	
	if (document.forms[0].answer.value == ""
	|| document.forms[0].answer.value == "Enter Your Answer Here.") {
	$("answer_error").firstChild.nodeValue = "*Answer required.";
	return false;
	}
	
	/*
	if(document.forms[0].security.value == "" {  //testing, not sure. possible not needed
		window.alert("You must select a security question.");
	} */
	
	
	var telephoneSelected = false; // works******
	
	for (var i = 0; i < 3; ++i) {
		if (document.forms[0].tele[i].checked == true) {
			telephoneSelected = true;
			break;
		}
	}
	
	if (telephoneSelected != true) {
		$("tSelect_error").firstChild.nodeValue = "*You must select a telephone option.";
		return false;
	}							//****************
	
	
	
	var interestSelected = false; // works*******
	
	for (var j = 0; j < 12; ++j) {
		if (document.forms[0].interests[j].checked == true) {
		   interestSelected = true;
		   break;
		}
	}
	
	if (interestSelected == false) { 
		$("interest_error").firstChild.nodeValue = "*You must select an interest option box.";
		return interestSelected;
	}
								//****************
								
	var offerSelected = false; // testing
	
	for (var k = 0; k < 2; ++k) {
		if(document.forms[0].offers[k].checked == true) {
			offerSelected = true;
			break;
		}
	}
	
	if (offerSelected == false) {
		$("offers_error").firstChild.nodeValue = "*You must select an option.";
		return offerSelected;
	}
	
	return true;

}


var clearName = function(){
	$("name_personal").value = "";
}

var clearEmail = function(){
	$("email_personal").value = "";
}

var clearAnswer = function(){
	$("answer").value = "";
}

window.onload = function() {

	$("name_personal").onclick = clearName; //needs id in input tag to use.
	$("email_personal").onclick = clearEmail;
	$("answer").onclick = clearAnswer;

}