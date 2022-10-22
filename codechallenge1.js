/* Code challenge no 1 */
"use strict ";


// my way can be used for smaller arrays 
temps = [17 , 27 , 13]
temps2 = [12,-5,5,100,20,50,2121212121,]

const printforecasting = function (temps) {
    console.log(`...${temps[0]}c in 1st day , ${temps[1]}c in 2nd day , ${temps[2]}c in 3rd day`);
}

console.log(printforecasting(temps));


// expert way 
//expression function
// for loop
// str = str + ``
const printforecasting2 = function (arr)  {
    let str = '';
    for (i = 0 ; i < arr.length ; i++ ) {
        str += `${arr[i]} c in ${i - 1} days ...`
    }
    return ('...' + str) ; 
}

console.log(printforecasting2(temps2));