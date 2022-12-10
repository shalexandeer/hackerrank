const countingSort = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] ??= {[curr]: 0};
        acc[curr][curr]++;
        return acc;
      }, {});
}

console.log(countingSort([1,1,2,3,1]));