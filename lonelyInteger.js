// This function counts instances of elements in an array
// the return object has the array elements as keys
// and number of occurrences as it's value
// const arrToInstanceCountObj = arr => arr.reduce((obj, e) => {
//     obj[e] = (obj[e] || 0) + 1;
//     return obj;
//   }, {});
  
// arrToInstanceCountObj(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'])
/*
  {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1,
  }
*/
const lonelyInteger = a => {
  let newArr = a.reduce((obj,e) => {obj[e] = (obj[e] || 0) + 1;return obj}, {})
  Object.entries(newArr).forEach(([key,value]) => {
    if(value == 1){console.log(key)} 
  })
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));