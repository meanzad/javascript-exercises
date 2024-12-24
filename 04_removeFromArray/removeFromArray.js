const removeFromArray = function() {

    let n = arguments.length;

    for(let i = 1;i < n;i++)
    {
        let index = arguments[0].indexOf(arguments[i]);
        while (index > -1)
        {
            arguments[0].splice(index,1);
            index = arguments[0].indexOf(arguments[i]);
        }
    }

    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
