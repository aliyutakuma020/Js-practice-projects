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
