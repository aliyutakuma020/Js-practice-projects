var friends = ["charlie", "Aisha", "bizi", "take"];
friends[4] = "polosi";
console.log(friends)
  
/**count*/ 
var nums = [23, 56, 89, 89]
console.log(nums.length);

 /**Built-in methods 
  *push/pop
  *shift/unshift
  *indexOf
  *slice
  */

 /**Use push to add to the end of an array*/
var colors = ["red", "orange", "yellow"]
colors.push("green");
console.log(colors);

/**Use pop to remove the last item in an array */
var colors = ["red", "orange", "yellow"]
colors.pop();

/**use unshit to add to the front of an array */

var colors = ["red", "orange", "yellow"]
colors.unshift("balck");
console.log(colors);

/**Use shift to remove the first item in an array */
var colors = ["black","red", "orange", "yellow"]
colors.shift(); //opposite to unshift
console.log(colors);

/** use indexOf() to find the index of an item in an array */ 
var friends = ["ali", "hauwa", "haidr", "ajayi"];

console.log(friends.indexOf("hauwa"));

/** Use slice() to copy parts of array*/
var fruits = ["mango", "apple", "lemon", "bannana", "gauva"]

var citrua = fruits.slice(1, 3);
console.log(citrua);

/** you can also use slice() to copy an entire of array*/
var name = [1, 2, 3];
var newname = name.slice();
console.log(newname)

/**execise 1*/
var nums = [22, 33, 13, 34, 44];
console.log(nums[nums.length]);
