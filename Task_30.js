// //Answer No 30
let username_array = ["Taha", "Hamza", "Salman", "admin", "Talha"];
for (let i in username_array) {
    if (username_array[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello", username_array[i], "thank you for logging in again.");
    }
}
