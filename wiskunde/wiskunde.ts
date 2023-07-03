const rl = require("readline-sync");
let mexp = require('math-expression-evaluator');

let uitdrukking = rl.question("Geef een wiskundig uitdrukking: ");

try{
    console.log(mexp.eval(uitdrukking))
}
catch(exception)
{
    throw 'Dit is geen wiskundige uitdrukking'
}
export{};
