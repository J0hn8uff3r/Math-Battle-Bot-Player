// ==UserScript==
// @name        Math Battle Bot Player
// @author		J0hn 8uff3r 0v3rf10w
// @namespace   https://github.com/J0hn8uff3r
// @license		GNU General Public License v3.0
// @require     https://code.jquery.com/jquery-3.1.1.min.js
// @description Play to math battle calculating the operation results and answers the correct question
// @include     https://tbot.xyz/math/*
// @released	11/03/2017
// @version     1.0
// @grant       none
// ==/UserScript==

$( document ).ready(function() {

// select the target node
var target = document.getElementsByClassName("page_wrap in_result in_greet")[0];

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {

//Retrieve new loaded values after each answered question
$(document).click(function() {
	
	first_n = parseInt($("#task_x").html());
	operator = $("#task_op").html();
	second_n = parseInt($("#task_y").html());
	result = parseInt($("#task_res").html());


setTimeout( function () {

switch (operator) {
    case '+':
	 if (first_n + second_n == result) {
		 console.log(first_n + "+" + second_n + " = " + result + " Suma bien");
		 document.getElementById("button_correct").click();
		 // $( "#button_correct" ).click();
	 } else {
		 console.log(first_n + "+" + second_n + " != " + result + " Suma mal");
		 document.getElementById("button_wrong").click();
		 // $( "#button_wrong" ).click();
	 }
        break;
    case '–':
	 if (first_n - second_n == result) {
		 console.log(first_n + "-" + second_n + " = " + result + " Resta bien");
		 document.getElementById("button_correct").click();
		 // $( "#button_correct" ).click();
	 } else {
		 console.log(first_n + "-" + second_n + " != " + result + " Resta mal");
		 document.getElementById("button_wrong").click();
		 // $( "#button_wrong" ).click();
	 }
        break;
    case '×':
	 if (first_n * second_n == result) {
		 console.log(first_n + "*" + second_n + " = " + result + " Multi bien");
		 document.getElementById("button_correct").click();
		 // $( "#button_correct" ).click();
	 } else {
		 console.log(first_n + "*" + second_n + " != " + result + " Multi mal");
		 document.getElementById("button_wrong").click();
		 // $( "#button_wrong" ).click();
	 }
        break;
    case '/':
	 if (first_n / second_n == result) {
		 console.log(first_n + "/" + second_n + " = " + result + " Divi bien");
		 document.getElementById("button_correct").click();
		 // $( "#button_correct" ).click();
	 } else {
		 console.log(first_n + "/" + second_n + " != " + result + " Divi mal");
		 document.getElementById("button_wrong").click();
		 // $( "#button_wrong" ).click();
	 }
        break;
    default:
        console.log("Something went wrong...");
}
    } , 2000 ); //We need to add a small delay cause onclick event is triggered too fast and browser dies :D
// observer.disconnect();
	 
	 }); //Document onclick event
	 
  });
}); //Game class observer
 
// configuration of the observer:
var config = { attributes: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);



// later, you can stop observing
// observer.disconnect();

})




