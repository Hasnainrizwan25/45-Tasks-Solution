//Answer No 16
let Invitation_Array_1_ = ["Touseef", "Ahmed", "Ali"];
console.log(Invitation_Array_1_[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Invitation_Array_1_[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Invitation_Array_1_[2] + " You are Invited for dinner at my place at 11:00pm");
console.log("\TOuseef Can't make the dinner");
let Modify_Invitation_Array2_ = ["Fahad", "Ahmed", "Ali"];
console.log(Modify_Invitation_Array2_[0] + " You are Invited for dinner at my place at 9:00pm");
console.log(Modify_Invitation_Array2_[1] + " You are Invited for dinner at my place at 10:00pm");
console.log(Modify_Invitation_Array2_[2] + " You are Invited for dinner at my place at 11:00pm");
console.log("I wanna inform to all of you that I found a big dinner table.");
Modify_Invitation_Array2_.splice(0, 0, "Owais");
console.log(Modify_Invitation_Array2_);
Modify_Invitation_Array2_.splice(2, 0, "Zohaib");
console.log(Modify_Invitation_Array2_);
Modify_Invitation_Array2_.push("Usman");
console.log(Modify_Invitation_Array2_);
