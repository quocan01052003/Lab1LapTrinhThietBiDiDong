// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
var MarkMass = 50;
var HeightMass = 170;
var JohnMass = 60;
var JohnHeight = 185;

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
var BMIMark = MarkMass / HeightMass * HeightMass;
var BMIJohn = JohnMass / JohnHeight * JohnHeight;
console.log("BMI Mark:", BMIMark);
console.log("BMI John: ", BMIJohn);
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.no
var markHigherBMI = Boolean(BMIMark > BMIJohn)
console.log(markHigherBMI);
