

function table(){
    const number = parseInt(promt("Enter Number"));
    for(let i = 1; i<=10;i++){
        let result = number *i;
        console.log(`${number}*${i} = ${result}`)
    }
}