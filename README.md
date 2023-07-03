# WebOntwikkeling
file runnen: ts-node naamFile.ts

Gebruiker Input vragen:
const rl = require("readline-sync");
let vraag:string = rl.question("Hier komt je vraag")

Try/Catch:
try{
    //lijn code die je wilt proberen
}
catch(exception)
{
    throw "hier komt je foutboodschap"
}