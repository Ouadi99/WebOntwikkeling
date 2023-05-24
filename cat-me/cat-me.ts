var catMe = require('cat-me')
const rl = require("readline-sync");
let soort:string = rl.question("wat voor soort kat wilt u op uw scherm (normal,nyan): ")
console.log(catMe(soort))
