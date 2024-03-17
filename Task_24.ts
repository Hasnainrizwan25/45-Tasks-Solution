// Task No 24

//strings test

let programming_langauge="TypeScript";
console.log("Is Programming_Language==TypeScript? | Hurray, I have guess Correct")
console.log(programming_langauge=="TypeScript")

console.log("Is Programming_Language==Java? | Oops, I have guessed incorrect")
console.log(programming_langauge=="Java")


//lower case test

let terminal="Command Prompt";
console.log("Is terminal==command prompt ? | Hurray, I have guessed right");
console.log(terminal.toLowerCase()=="command prompt");

console.log("Is terminal==windows power shell ? | Oops, I have guessed incorrct");
console.log(terminal.toLowerCase()=="windows power shell");




//numerical test | True Conditions

let date=20;

console.log("Is today date 20? | Hurray I have guess right ")
console.log(date==20);

console.log("Is today date other 26? | Hurray I have guess right ")
console.log(date!=33);

console.log("Has today's date passed the 15th already? | Hurray I have guess right ")
console.log(date>15);

console.log("Has the 25th date yet to come? | Hurray I have guess right ")
console.log(date<25);

console.log("Is today date 20 or 25 yet to come? | Hurray I have guess right ")
console.log(date>=20);

console.log("Is today date 20 or 15th have passed? | Hurray I have guess right ")
console.log(date<=20);




//false Conditions

console.log()
let Number_to_be_guess=42;
console.log("Is Number 20? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess==20);


console.log("Is Number other than 42? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess!=42);


console.log("Is Number greater than 53? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess>53);


console.log("Is Number less than 19? | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess<19);


console.log("Is Number equal to 70 or greater than 70 | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess>=70);

console.log("Is Number equal to 29 or less than 29 | Oops, I have guessed incorrectly")
console.log(Number_to_be_guess<=29);



// Test using "and" and "or" operator

let __country="Japan"
let __city="Tokyo"

console.log(__country=="Japan" && __city=="Tokyo");
console.log(__country=="Japan" && __city=="Nagoya");

console.log(__country=="China" || __city=="Tokyo");
console.log(__country=="China" || __city=="Sapporo");


// // Test to check item in a array

let _checking_array=[1,2,3,4,5];
console.log(3 in _checking_array);
console.log(7 in _checking_array);



// Test to check item not in a array

let checking_array2=[1,2,3,4,5,8];
console.log(checking_array2.includes(10))
console.log(checking_array2.includes(12))