//Answer No 32


let current_users: string[]=["Hamza","Bilal","Abid","Adeel","Emran"];

let new_users=["Ayaan","Burhan","Zunain","Adeel","Bilal"];

for (let i in new_users){
    if (current_users.includes(new_users[i])){
        console.log("You will need to enter a new username");
    }
    else{
        console.log("Username is available.");
    }
}
