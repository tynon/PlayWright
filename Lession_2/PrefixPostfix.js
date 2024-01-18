let a = 1;
let b = 2;

//++a: Prefix ++ -> increase 1 step
//b++ : Postfix ++ -> increase 1 step after operation
let c = ++a + b++;

//Breakpoint
console.log(a, b, c)

/* Explain
*Prefix > right operand > assign result into left operand > postfix
*/ 