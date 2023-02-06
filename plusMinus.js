let plusMinus = (arr) =>{
    let [positive,negative,zero] = [0,0,0];
    //sum variable with every element match with condition
    arr.forEach((n) => {
        (n == 0) ? zero += 1 : zero+=0; 
        (n < 0 && n != 0) ? negative +=1 : negative+=0; 
        (n > 0 && n != 0) ? positive+=1 : positive+=0 
    })
    let array = [positive,negative,zero]
    array.map(n => n / arr.length).forEach((n) => {
        console.log(n.toFixed(6));
    })
}

plusMinus([-4, 3, -9, 0, 4, 1]);