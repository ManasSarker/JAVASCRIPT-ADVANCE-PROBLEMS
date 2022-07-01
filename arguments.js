/* Here I add all Numbers form  function I called */

function addNumber(num1, num2) {
  /* This is arguments function .It can store all information form function as a object elements */
  console.log(arguments[0]);

  var num = 0;
  /* This for loop is nothing but the adding all numbers form arguments !! */
  for (i = 0; i < arguments.length; i++) {
    var num = num + arguments[i];
  }

  return num;
}

var newNum = addNumber(10, 20, 50);

console.log(newNum);
