let timeConversion = (s) => {
    // let hour = parseInt(s.substring(0,2));
    // (s.substring(8,10) == "AM" && hour == 12) ? hour = 0 : 
    // //if PM + 12, else + 0
    // (s.substring(8,10) == "PM") ? hour += 12 : hour += 0;
  
    // (hour >= 24) ? hour -= 24 : hour -= 0;
    // return (hour < 10) ? `0${hour}:${s.substring(3,5)}:${s.substring(6,8)}` : `${hour}:${s.substring(3,5)}:${s.substring(6,8)}` 
  
    let hour = parseInt(s.substring(0,2));
    let format = s.substring(8,10);
    let rest = s.substring(3,8);

    if(format == 'PM'){
        if(hour == 12){
            return s.substring(0,8)
        }
        hour += 12;
        if (hour >= 24) hour -= 24;
        return (hour < 10) ? `0${hour}:${rest}`:`${hour}:${rest}`
        
    }
    else if(format == 'AM'){
        if(hour == 12){
            hour = 0;
        }
        return `0${hour}:${rest}`
    }

}
const time = '06:40:03AM'
console.log(timeConversion(time))


// get hour with substring 0,2.
// get format substring(8,10)
//get the rest of minutes and second.
//if format == 'PM'; if hour == 12 return substring 0,8; else hour += 12; if > 24; hour-24
//if format == 'AM'; if hour == 12 return hour ==0; return substring 0,8