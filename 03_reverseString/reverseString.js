const reverseString = function(s) {

    let res = "";
    const n = s.length;

    for(let i = n-1;i >= 0; i--)
    {
        res += s[i];

    }

    return res;

};

// Do not edit below this line
module.exports = reverseString;
