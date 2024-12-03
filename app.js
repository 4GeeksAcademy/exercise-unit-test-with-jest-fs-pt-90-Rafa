const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
}

const fromDollarToYen = function(valueInDollar) {
    return Math.floor((valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"]);
}

const fromYenToPound = function(valueInYen) {
    return Math.floor((valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"]);
}



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };