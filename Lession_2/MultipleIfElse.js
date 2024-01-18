let clientAge = 11;
if(clientAge < 18){
    console.log ("Chua du tuoi ban bia!");
    if(clientAge < 12){
        console.log("call canh sat.....");
    }
} else if(clientAge >= 18 && clientAge <= 55){
    console.log("Unlimited!");
} else{
    console.log("2 chai!");
}

/**
 * 1stCondition && 2ndCondition -> true ONLY them both are true
 * 1stCondition || 2ndCondition -> false ONLY them both are false
 * && ->  if 1sCondition = false, 2ndCondition don't need to action
 * & ->  if 1sCondition = false, 2ndCondition still action
 * || -> if 1sCondition = true, 2ndCondition don't need to action
 * | -> if 1sCondition = true, 2ndCondition still action
 * refer BitwiseOperator.js
 */