function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0;
    candles.sort((a,b) => a-b).forEach((e) => {
        if(e == candles[candles.length-1]) tallest += 1;
    })
    console.log(tallest);
}
arr = [3,2,1,3]
birthdayCakeCandles(arr)
// create var tallest
//sort arr
//iterate through array = if i == arr[arr.length-1] tallest += 1

