/**
 *  * printReverve : Function that prints numbers in reverse order 
 *   */
function printReverse()
{
	var num = [1, 2, 3, 4, 5, 6];
	for (var i = num.length -1; i >= 0; i--)
	{
		console.log(num[i]);
	}
}

/**
 *  * printReverve : Function that prints numbers in reverse order 
 *   */
function printReverse()
{
	var num = [1, 2, 3, 4, 5, 6];
	num.slice().reverse().forEach(function(input)
	{
		console.log(input);
	});
}
/** 
 *  * isUniform ; Funtion which takes an array as argument and returns
 *   * true if all elements in the array are true
 *   */
function isUniform()
{
	var num = [1, 1, 1, 1, 1];
	for (var i = 1; i < num.length; i++)
	{
		if (num[i] !== num[0])
		{
			return false;
	        }
       
	 }
	return true;

}
console.log(isUniform());
/** 
 *  * isUniform ; Funtion which takes an array as argument and returns
 *   * true if all elements in the array are true
 *   */
function isUniform()
{
	var num = ["b", "b", "b"];
	for (var i = 1 ; i < num.length; i++)
	{
		if (num[i] !== num[0])
		{
			return false;
		}
		            
	}
	return true;
}
console.log(isUniform()); 
/**
 *  * SumArray : returns the sum of all number in an array.
 *   */

function SumArray()
{
	var num = [1, 2, 3, 4];
	var sum = 0;
	for(var i = 0; i < num.length; i++)
	{
		sum += num[i]; 
	}
	return sum;   
}
console.log(SumArray());
