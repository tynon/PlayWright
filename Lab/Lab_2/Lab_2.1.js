let weight = 90;
let height = 1.4;

// Calculate BMI
let BMI = weight / (height * 2)
console.log('chi so BMI cua ban: ', BMI);

//Ket qua
if(BMI <= 18.5){
    console.log("Underweight!");
} else if(BMI >= 18.6 && BMI <= 24.9){
    console.log("Normal weight");
} else if (BMI >= 25 && BMI <= 29.9){
    console.log("Overweight!");
} else {
    console.log("Obesity!");
}