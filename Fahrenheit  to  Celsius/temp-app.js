/* Write a function to convert Fahrenheit to Celsius:
    Celsius=  5/9 *(Fahrenheit−32);
    
* Add validation to ensure the input is a number.*/ 

//Creating it General Function;
function temp(fahrenheit){
    if(typeof fahrenheit !== 'number' || isNaN(fahrenheit)){
        return "Invalid Input, Please provide a number!";
    }
    const celSius = 5 / 9 * (fahrenheit - 32);
    return `Today's temperature is ${celSius.toFixed(2)} degree Celsius.`;
}
console.log(temp(110)); // Valid number;
console.log(temp("Pial")); // Invalid String;
console.log(temp(null)); // Now handled as Invalid;


//with arrow function;
const todayTemp = (Fahrenheit) => {
    if(typeof Fahrenheit !== 'number' || isNaN(Fahrenheit)){
        return "Invalid Key, Please provide a number!";
    }
    const Celsius = 5 / 9 * (Fahrenheit - 32);
    return `Today's temperature is ${Celsius.toFixed(2)} degree Celsius.`;
}
console.log(todayTemp(80)); // Valid number;
console.log(todayTemp(null)); // Now handled as Invalid;
console.log(todayTemp("Zaheed")); // Inavlid String;