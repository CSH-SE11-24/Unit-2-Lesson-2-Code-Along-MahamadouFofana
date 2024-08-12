// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.

let user = prompt("What's the day of the week?")
if (user === "Saturday" || user === "Sunday"){
  console.log("It's the weekend")
} else{
  console.log("It's a school day")
}

// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)

let age = prompt("What is your age?")
age = parseInt(age)


if(age < 0){
  console.log("That's not a age")
}
else if (age <= 12) {
  console.log("You are a child!")
} else if (age <= 18) {
  console.log("You are a teen")
} else{
  console.log("RIP you lived a good life")
}

// WHILE LOOPS
// Print 1 to 5

let t = 1
while(t <= 5){
  console.log(t)
  t++
}



// Print from a certain number to 1
let user1 = prompt("Enter a number")
user1 = parseInt(user1)
while(user > 0){
  console.log(user)
  user1--
}


// Summing up to 5

let sum = 0
let counter = 1

while (counter <= 5){
  sum = counter + sum
  counter++
}
console.log("Sum from 1-100", sum)

// Using prompt

let mysteryStudent = "zyaire"
let user2 = prompt("Enter a student's name").toLowerCase()

while (mysteryStudent !== user2){
  user2 = prompt("Try again, guess a different student.")
}
console.log("Good Job!")
