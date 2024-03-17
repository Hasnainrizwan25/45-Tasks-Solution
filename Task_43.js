//  //Answer No 43
let __magician_array=["Doug Henning","Siegfried & Roy","Max Maven","Eugene Burger","David Copperfield"]
let __revise_magician_array=[...__magician_array]
function make_great_(arrays2){
    for (let j in arrays2){
        arrays2[j]="Great, "+arrays2[j]
    }
}
make_great_(__revise_magician_array)
function show_magicians_(arrays){
    for (let i in arrays){
        console.log(arrays[i])
    }
}
show_magicians_(__magician_array)
console.log("")
show_magicians_(__revise_magician_array)
