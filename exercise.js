/**
 *  * 
 *   *  isEven - return a true if a num is even and false if not. 
 *    * returns number. 
 *     */
function isEven(num) 
{
	if (num % 2 === 0)
	{
		return "true";    
	}
	return "false";
}

/**  Recursive */ 
function factorial(num)
{
	if (num == 0)
	{
		return 1;    
	}
	else
	{
		return num * factorial(num - 1);  // recursive call n * (n - 1)!  
	}
}
console.log(factorial(4));

/** itrative Approach*/
function factorial(num)
{
	var result = 1;
	for (var i = 1; i <= num; i++)
	{
		result *= i;
        }
	return result;
}
console.log(factorial(4));

/**kababTOSnake
 * *replace all "-" with "_"
 * */ 
function kebabTosnake(str)
{
	    return str.replace(/-/g, "_");
}
kebabTosnake ("Hello-world");
