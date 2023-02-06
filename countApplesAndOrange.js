function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let result = [0,0]
    apples.map((e) => a + e).forEach((e) => (e >= s && e <= t) ? result[0] += 1: result[0] += 0) 
    oranges.map((e) => b + e).forEach((e) => (e >= s && e <= t) ? result[1] += 1: result[1] += 0) 
    result.forEach((e) => console.log(e))

}   



apples = [-2,2,1]
oranges = [5,-6]
console.log(countApplesAndOranges(7,11,5,15,apples,oranges))
// define variable app and orange = 0
// apples arr map array -a
// oranges arr map array -b
//forEach apples if e between s-t, app +=1
//forEach oranges if e between s-t, orange +=1