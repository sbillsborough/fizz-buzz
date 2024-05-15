let userNumberPrompt = prompt(
  "Let's play Fizz Buzz! Enter your number! Then check the console to play."
);
console.log("You entered: " + userNumberPrompt);

for (i = 1; i <= userNumberPrompt; i++) {
  console.log(i);
  if (i % 3 === 0) {
    console.log(i + " Fizz");
  }
  if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz Buzz");
  }
}
