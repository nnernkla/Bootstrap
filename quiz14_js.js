function printReverse(array){
	for(var i = array.length; i > 0; i--){
		console.log(array[i-1]);
	}
}

function isUniform(array){
	var firstIndex = array[0];

	for(var i = 1; i < array.length; i++){
		if(firstIndex !== array[i])
			return false;
	}
	return true;
}

/*function isUniform(array){
	var firstIndex = array[0];
	array.forEach(function(element){
		if(firstIndex !== element){
			return false;
		}
	});
	return true;
}*/

function sumArray(array){
	var sum = 0;
	array.forEach(function(element){
		sum += element;
	});

	return sum;
}
/*
function sumArray(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}
*/

function max(array){
	var max = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] > max)
			max = array[i];
	}

	return
}


/*var todo = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "view"){
		viewTodo();
	}
	else if(input === "new"){
		addTodo();
	}	
	else if(input === "delete"){
		deleteTodo();
	}

	input = prompt("What would you like to do?");
}

console.log("Okay, You quit the app!");

function viewTodo(){
	console.log("***********************");
	todo.forEach(function(todo,i){
		console.log( i + ": " + todo);
	});
	console.log("***********************");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todo.push(newTodo); 
	console.log("added todos")
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todo.splice(index,1);
	console.log("deleted todos")
}*/