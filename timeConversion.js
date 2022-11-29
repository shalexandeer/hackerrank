let timeConversion = (s) => {
    let hour = parseInt(s.substring(0,2));
    (s.substring(8,10) == "AM" && hour == 12) ? hour = 0 : 
    //if PM + 12, else + 0
    (s.substring(8,10) == "PM") ? hour += 12 : hour += 0;
  
    (hour >= 24) ? hour -= 24 : hour -= 0;
    return (hour < 10) ? `0${hour}:${s.substring(3,5)}:${s.substring(6,8)}` : `${hour}:${s.substring(3,5)}:${s.substring(6,8)}` 
  
}
console.log(timeConversion('5:05:45PM'))