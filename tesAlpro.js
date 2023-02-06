function miniMaxSum(arr) {
    // Write your code here
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.filter((e) => e != arr[i]).reduce((a,b) => a+b))
    }
    newArr.sort((a,b) => a-b)
    return `${newArr[0]} ${newArr[arr.length-1]}`
}
console.log(miniMaxSum([7,69,2,221,8974]))