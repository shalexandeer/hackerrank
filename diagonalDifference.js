const diagonalDifference = (arr) => {
    let d1 = 0; 
    let d2 = 0;
    arr = arr.filter(item => item.length != undefined);
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == j) d1 += arr[i][j];
            if(i + j == arr.length -1) d2 += arr[i][j];
        }
    }
    return Math.abs(d1 - d2);
}
arr = [3,[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference(arr));
