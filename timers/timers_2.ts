let nmr:number = 0;
const teller = (nummer:number) => {
    nmr++;
    return console.log(nmr);
}
for(let x=0;x < 1;x++){
    console.log(setInterval(teller, 1000));
}
