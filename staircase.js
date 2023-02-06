const staircase = (n) => {
    for(let i = 0; i < n ;i++){
        let string = "";
        for(let j = 0; j < n - i - 1 ; j++){
            string += " ";
        }
        for(let k = 0; k < i + 1 ; k++){
            string += "#";
        }
        console.log(string);
    }
}
console.log(staircase(3));

//
// N = 4
// SSS# i = 0; S = 3; # = 1
// SS## i = 1; S = 2; # = 2
// S### i = 2; S = 1; # = 3
// #### i = 3; s = 0; # = 4

// S = N - i - 1
// # = i + 1
