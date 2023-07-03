const tryParseInt = (str: string) => {
    let number = parseInt(str);
    if (isNaN(number)) {
        throw Error("Cannot parse this number");
    }
    return number;
}
let woord:string = "50";
try{
    console.log(tryParseInt(woord));
}
catch(exception)
{
    throw "Je moet een getal doorgeven!"
}