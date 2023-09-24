// Ask the user for their name
var name;
do {
  name = prompt("Enter your name:");
} while (!isValidName(name));

// Function to validate the name
function isValidName(name) {
  if (/^[A-Za-z]{1,20}$/.test(name)) {
    return /^[A-Za-z]{1,20}$/.test(name);
  } else {
    alert("(Maximum 20 characters, letters only)");
  }
}

alert("Welcome, " + name + ".");

// Ask the user for their age
var age;
do {
  age = prompt("Enter your age:");
} while (!isValidAge(age));

// Function to validate the age
function isValidAge(age) {
  if (
    /^\d+$/.test(age) &&
    parseInt(age) >= 18 &&
    /^\d+$/.test(age) &&
    parseInt(age) <= 80
  ) {
    return (
      /^\d+$/.test(age) &&
      parseInt(age) >= 18 &&
      /^\d+$/.test(age) &&
      parseInt(age) <= 80
    );
  } else {
    return alert("You must be at least 18 and no more than 80 years old.");
  }
}
