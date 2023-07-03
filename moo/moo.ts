let cowsay = require("cowsay");
let rl = require("readline-sync");
let control:boolean = false;


const say = (text:string) => {
console.log(cowsay.say({text : text}))
}
do{
    try{
        let tekst:string = rl.question("Wat zegt een koe: ");
        say(tekst);
        control = true;
    }
    catch(exception){
        console.log(exception);
    }
}
while(control == false)
export{};