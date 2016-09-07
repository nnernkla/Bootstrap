/*var movies = [{
				title: "Harry Potter",
				rating: 5, 
				hasWatch: true
			  },
			  {
			  	title: "Star War",
			  	rating: 4.5,
			  	hasWatch: false
			  },
			  {
			  	title: "Frozen",
			  	rating: 5,
			  	hasWatch: true
			  },
			  {
			  	title: "Now You See Me",
			  	rating: 4,
			  	hasWatch: false
			  }]
*/
/*function movieList(){
	movies.forEach(function(list){
		var result = "You have ";
		if(list.hasWatch){
			result += "watched ";
		}
		else{
			result += "not seen ";
		}

		result += "\"" + list.title + "\" - ";
		result += list.rating + " stats";
		console.log(result);
	})
}*/

//function above is working just fine. But you also can do like this

/*	function buildString(list){
		var result = "You have ";
		if(list.hasWatch){
			result += "watched ";
		}
		else{
			result += "not seen ";
		}

		result += "\"" + list.title + "\" - ";
		result += list.rating + " stats";
		
		return result;
	}

	movies.forEach(function(list){
		console.log(buildString(list));
	});
*/

//How to use method inside object!

var comments = {};
comments.data = ["Good Job!", "Bye bye!", "Lame ba the klgf", "klopp ky unjs ma"];

comments.print = function(){
	this.data.forEach(function(list){
		console.log(list);
	});
}

comments.print();