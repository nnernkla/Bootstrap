function isEven(num){
	return (num % 2 === 0); 
}

function factorial(num){
	var result = 1; 
	for(var i = num; i >= 1; i--){
		result = result * i; 
	}

	return result; 
}

function kebabToSnake(word){
	var newWord = word.replace(/-/g , "_");
	return newWord;
}

//console.log (isEven(4));