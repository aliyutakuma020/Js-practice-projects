var todo = ["Buy different bags"];

var input = prompt("what would you like to do");
function view()
{
	console.log("****************");
	todo.forEach(function(todo, i) {
	console.log(i + ": " + todo);    
	});
}
	console.log("****************");

function Add()
{
	var sum = prompt("Add to your list");
	todo.push(sum);
	console.log("Added");
}

function del()
{
	var clr = prompt("Which num will you delete?");
	todo.slice(clr, 1);
	console.log("Deleted!!");
}

while(input != "quit")
{
	if (input === "list")
	{
		view();    
	}
	else if (input === "add")
	{
		Add();
	}
	else if (input === "del")
	{
		del();
	}
	var input = prompt("what would you like to do");
}
console.log("quit success");
