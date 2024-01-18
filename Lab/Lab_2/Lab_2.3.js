let weight = 90;
let height = 1.4;

// Calculate BMI
let BMI = weight / (height * 2);
let increase = '';
let decrease = '';
console.log('chi so BMI cua ban: ', BMI);

//Ket qua
if(BMI <= 18.5){
    console.log("Underweight!");
    increase = 18.6 - BMI;
    console.log("Ban can tang :", increase, "kg");
} else if(BMI >= 18.6 && BMI <= 24.9){
    console.log("Normal weight");
} else if (BMI >= 25 && BMI <= 29.9){
    console.log("Overweight!");
    decrease = BMI - 24.9;
    console.log("Ban can giam :", decrease, "kg");
} else if(BMI >= 30){
    console.log("Obesity!");
    decrease = BMI - 24.9;
    console.log("Ban can giam :", decrease, "kg");
}