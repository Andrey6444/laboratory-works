"use strict"
/*
var calculator = {
	read: function () {
		this.a = +prompt("Введите значение для 'a'", 0);
		this.b = +prompt("Введите значение для 'b'", 0);
		},
	sum: function ()  {
		return this.a + this.b;
	},
	mul: function () {
		return this.a * this.b;
	}
	};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/
/*
function Accumulator (startValue){
	this.value = startValue;
	this.read = function (){
		this.value += +prompt ('Сколько добавить?', 0);
		};
}
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
*/
/*
function sum(){
	var result = 0;
	for (var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9));
*/
/*
var numbers = ["12", "23", "100", "34", "56", "9", "233"];
function maxNumber() {
	var result = 0;
	for (var i=0; i< this.length; i++){
		if(result < +this[i]){
			result = this[i];
		}
	}
	return result;
}
console.log (maxNumber.apply(numbers));\
*/
/*
var lis = document.getElementsByTagName("li");
for (var i=0; i < lis.length; i++){
	var title = lis[i].firstChild.data;
	var count = lis[i].getElementsByTagName("li").length;
    alert(title + ":" + count);	
}
*/
