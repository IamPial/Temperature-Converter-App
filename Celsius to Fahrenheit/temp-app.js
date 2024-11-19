/* Write a function to convert Celsius to Fahrenheit:
    Fahrenheit =  9/5 *(Celsius + 32);
    
* Add validation to ensure the input is a number.*/ 

//Creating it with General function;
function temp(celsius){
    if(typeof celsius !== 'number' || isNaN(celsius)){
        return "Invalid input, Please provide a number!";
    }
    const fahrenheit = 9 / 5 * (celsius + 32);
    return `Today's temperature is ${fahrenheit.toFixed(2)} degree Fahrenheit.`;
}
console.log(temp(20));  // Valid number
console.log(temp("Pial"));  // Invalid string
console.log(temp(undefined));  // Now handled as invalid


//with arrow Function;
const todayTemp = (celSius) => {
    if(typeof celSius !== 'number' || isNaN(celSius)){
        return "Invalid input, Please provide a number!";
    }
    const Fahrenheit = 9 / 5 * (celSius + 32);
    return `Today's temperature is ${Fahrenheit.toFixed(2)} degree Fahrenheit.`
}
console.log(todayTemp(30));  // Valid number
console.log(todayTemp(null));  // Now handled as invalid
console.log(todayTemp("Murad"));  // Invalid string

