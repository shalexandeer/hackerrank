let compareTriplets = (a, b) => {
    let [alice,bob] = [0,0];
    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]) alice+=1;
        if(a[i] < b[i]) bob+=1;
    }
    return `${alice} ${bob}`
};
console.log(compareTriplets([5,6, 7],[3,6, 10]));