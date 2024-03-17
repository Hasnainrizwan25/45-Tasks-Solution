// //Answer No 33
let number_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i in number_array) {
    if (number_array[i] == 1) {
        console.log(number_array[i].toString() + "st");
    }
    else if (number_array[i] == 2) {
        console.log(number_array[i].toString() + "nd");
    }
    else if (number_array[i] == 3) {
        console.log(number_array[i].toString() + "rd");
    }
    else {
        console.log(number_array[i].toString() + "th");
    }
}
