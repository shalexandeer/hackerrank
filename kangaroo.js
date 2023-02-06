function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    if(v1 < v2){
        return 'NO'
    }
    return ((x2 - x1) % (v1 - v2) == 0) ?  'YES': 'NO';
} 

console.log(kangaroo(21,6,42,3))
//if x2 > x1 && v2 > v1, return no
//if x1 > x2 && v1 > v2, return no
//return yes