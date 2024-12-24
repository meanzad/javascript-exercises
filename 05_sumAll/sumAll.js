const sumAll = function(a,b) {

    if((typeof a !== 'number') || typeof b !== 'number' || a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";

    if (a > b)
    {
        let temp = b;
        b = a;
        a = temp;
    }

    let sum = 0;

    for(let i = a; i <= b; i++)
    {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
