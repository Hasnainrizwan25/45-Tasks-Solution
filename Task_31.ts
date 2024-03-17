// //Answer No 31

let array_for_username: string[] = ["Taha","Saim","Salman","admin","Talha"];
array_for_username.splice(0,array_for_username.length)

if (array_for_username.length !==0){

    for (let i in array_for_username){
        if (array_for_username[i]=="admin"){
            console.log("Hello admin, would you like to see a status report?")
        }
        else{
            console.log("Hello",array_for_username[i],"thank you for logging in again.")
        }
    }
}
else{
    console.log(" We need to find some user");
}

