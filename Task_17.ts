//Answer No 17

let Invitation_Array1__=["Touseef","Ahmed","Ali"];
console.log(Invitation_Array1__[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Invitation_Array1__[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Invitation_Array1__[2] + " You are Invited for dinner at my place at 11:00pm");

console.log("\TOuseef Can't make the dinner");

let Modify_Invitation_Array2__=["Fahad","Ahmed","Ali"];
console.log(Modify_Invitation_Array2__[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Modify_Invitation_Array2__[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Modify_Invitation_Array2__[2] + " You are Invited for dinner at my place at 11:00pm");

console.log("I wanna inform to all of you that I found a big dinner table.");

Modify_Invitation_Array2__.splice(0,0,"Owais");

console.log(Modify_Invitation_Array2__);

Modify_Invitation_Array2__.splice(2,0,"Zohaib")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.push("Usman");
console.log(Modify_Invitation_Array2__);



console.log("\nSorry,I can invite only two people for dinner.")

Modify_Invitation_Array2__.pop()
console.log( "Usman, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Ali, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Ahmed, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

Modify_Invitation_Array2__.pop()
console.log( "Zohaib, I am sorry you can't invite you to dinner.")
console.log(Modify_Invitation_Array2__)

console.log("Owais, You are still in my dinner table for dinner");

console.log("Fahad, You are still in my dinner table for dinner");


Modify_Invitation_Array2__.splice(0,2)
console.log(Modify_Invitation_Array2__)