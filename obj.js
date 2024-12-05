var person =
	{
		name: "Ali",
		age: "22",
		city: "LA"
	};
console.log(person.name);
person["age"] += 1;
/*DATA TYPE*/
var posts =
	[
	{
		title: "cats are mediocre",
		aurthor: "colt",
		Comments: ["Awesome", "terrible"]
	},
	{
		title: "cats are actually awesome",
		author: "Cat lover",
		comments: ["<3", "Go to hell"]
	}
	]
/** Inserting in an object data type */
var obj = {};
obj._name = "polosi";
obj.age = 21;
obj.gender = "Male"

var prop  = "color"
obj[prop] = "red"; 
/**To retrive Malfoy */

var object =
	{ friends: 
	    [
		{name: "Malfoy"},
		{name: "firaun"},
	        {name: "Aliyu"},
	    ],
		color: "baby blue",
		isEvil: true
	};
object.friends[0];
/**Movie database Array */
var movieDB =
	[
		{
			title: "In Bruges",
			rating: "5 ",
			hasWatched: true
		},
		{
			title: "Frozen",
			rating: "4.5 ",
			hasWatched: false
		},
		{
			title: "mad max fury road",
			rating: "5 ",
			hasWatched: true
		},
		{
			title: "Les miserable",
			rating: "3.5",
			hasWatched: false
		}
	]
function builtString(movie)
{
	var result = " You have ";
	if(movie.hasWatched)
	{
		result += " watched" ;
	}
	else
	{
		result += " not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + "stars";
	console.log(result);
}
movieDB.forEach(function(movie)
	{
		console.log(builtString(movie));
	});
