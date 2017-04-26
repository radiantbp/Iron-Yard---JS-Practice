// exercise 1: added return to function

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo)

// exercise 2

// function yell(string){
// 	return string.toUpperCase();
// }

// console.log(yell("hey there"))

function yell10() {
	function yell(string){
	
	var string = "hey there"
	var times = 10;
	
		for(var i=0; i < times; i++){
	    	string = string.toUpperCase();
		}
	} return
}
console.log(yell10())



//  exercise 3

function longest(a, b) {
	if (a.length > b.length){
		return a;
	} else {
		return b;
	}
}

console.log(longest("ham sandwich", "pie"))
console.log(longest("pi", "pie"))

 // exercise 4

function isVowel(x){
	if ((x == 'a') || (x == 'e') || (x =='i') || (x == 'o') || (x == 'u') || 
		(x == 'A') || (x == 'E') || (x =='I') || (x == 'O') || (x == 'U')){
		return true;
	} else {
		return false;
	}
}

// I couldn't get my version with the Or Operator to work, so I copied Scott's, though I can't see how they aren't the same thing(?)

// function isVowel(x){

//   if (x == 'a') {
//     return true;
//   } else if (x == 'e') {
//     return true;
//   } else if (x == 'i') {
//     return true;
//   } else if (x == 'o') {
//     return true;
//   } else if (x == 'u') {
//     return true;
//   } else {
//     return false;
//   }

// }

console.log(isVowel('A'))
console.log(isVowel('b'))