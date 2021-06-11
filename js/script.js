/*Question 1*/

var outOfStock = true;

if (outOfStock === false) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

/*Question 2*/

for (var i = 15; i <= 25; i++)
  if (i === 17 && 20) {
    console.log(i);
  }

/*Question 3*/

/*Question 4*/

function whatIDontLike(word) {
  console.log(word);
}

whatIDontLike("Please send in a string");

/*Question 5*/

function subtract(firstNumber, secondNumber) {
  var typeofFirst = typeof firstNumber;
  var typeofSecond = typeof secondNumber;

  if (typeofFirst !== "number" || typeofSecond !== "number") {
    return "Invalid arguments";
  }

  return secondNumber - firstNumber;
}

var result = subtract(3, 5);
console.log(result);

//var subtract1 = document.querySelector("subtraction");
//var sum = subtract(3, 5);
//subtract1.innerHTML = sum;

//subtract1.innerHTML = subtract(3, 5);

/*Question 6*/
//Select the button with the class page.

//When the button is clicked do the following:

//Change the title of the page (the value of the title element in the head) to “Updated title”.
//Change the background colour of the whole page to “yellow”.
//Change the color of the h1 element to “green”.
//Change the h1 element’s font to “impact”.
//Change the value of the h1 element to be a link.
//Remove the list style and padding from the ul element.
//The h1 element should look like this after the click event:

var title = document.querySelector("title");
var button = document.querySelector("button");
var body = document.querySelector("body");

function changeH1() {
  var h1 = document.querySelector("h1");
  h1.style.color = "green";
  h1.style.fontFamily = "impact";
  title.innerHTML = "Updated title";
  body.style.backgroundColor = "yellow";
}

button.onclick = changeH1;

/*Question 7*/

//Select the button with the class price.

//When the button is clicked, loop through the array below, add all the prices and assign the total
//to be the innerHTML value of the element with the id total.

for (var i = 15; i < 90; i++) {
  if ((i = 15.6 && 28.3 && null && 89.99)) {
    console.log(i);
  }
}
