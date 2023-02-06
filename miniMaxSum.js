function miniMaxSum(arr) {
    // Write your code here
    let [min,max] = [0,0]
    arr.sort((a,b) => a-b);
    for(let i = 0; i < arr.length;i++){
        if(i < arr.length - 1) min += arr[i]
        if(i > 0) max += arr[i]
    }
    console.log(min, max);
}
miniMaxSum([1,2,3,4,5])

//sort the number
//loop = min(sum of arr.length -1) max(sum of arr[1]- arr[arr.length])
//return min max

