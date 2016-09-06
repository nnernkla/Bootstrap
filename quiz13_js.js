var todo = [];

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
}