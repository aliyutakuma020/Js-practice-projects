/* A functionn display a greeting message*/
function sayHi()
{
	console.log("Hello!")
	console.log("Goodbye!");
}
sayHi()

/*A function that dsquares a number*/
function square(num)
{
	console.log(num * num);
}
square(9);
/*function */
function sayHello(name)
{
            console.log("Hello there" + name + "!");
}
sayHello(jacob);

/**
 *  * this function cacpitizes the first character in a string. 
 *   * returns the value in a variable 
 *    */
function capitalize(str)
{
	console.log (str.charAt(0).toUpperCase() + str.slice(1)); 
}
var city = "paris";
var capital = capitalize(city);
/*
 * * To check if the input is equal to number
 * * and that's not a string. 
 * * returns values
 * */
function capitalize(input)
{
	    if (typeof input === "number")
		    {
			        return "that's not a string!"
				    }
	return input.charAt(0).toUpperCase() + input.slice(1)
}
var city = "paris";
var capital = capitalize(city);

var num = 37;
var capital = capitalize(num);

