var age = 19;
var drinkable = "";

// rewrite this conditional as a ternary operator, so that the functionality stays the same
if (age < 18) {
	console.log(age + " is too young to vote.")
} else {
	console.log(age + " is old enough to vote.")
}

// rewrite this one as a ternary operator, too!
if (age < 21) {
	drinkable = "too young";
} else {
	drinkable = "old enough";
}

// can we drink?
console.log(age + " is " + drinkable + " to drink alcohol.")