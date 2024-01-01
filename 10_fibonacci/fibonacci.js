const fibonacci =  function(n) {
    if(n<0) return "OOPS";
    
    const l = [0, 1]
    for(let i = 2 ; i < n+1 ; i++)
    {
        l[i] = l[i-1] + l[i-2];
    }
    return  l[n];
};

console.log(fibonacci('8'));

// Do not edit below this line
module.exports = fibonacci;
