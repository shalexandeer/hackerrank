function gradingStudents(grades) {
    // Write your code here
    let newArr = [];
    for(let i = 0; i < grades.length; i++){
        let [round,result] = [0,0];
        (grades[i] % 10 < 5) ? round += grades[i] + (5 - grades[i] % 10) : round += grades[i] + (10 - grades[i] % 10);
        (round - grades[i] < 3) ? result += round : result += grades[i];
        newArr.push((result < 40) ? grades[i] : result);
    }
    return newArr
}

arr = [73,67,38,33]

console.log(gradingStudents(arr));
//make a new var
//get unit of a number
//if unit < 5, return 5
// if unit > 5

