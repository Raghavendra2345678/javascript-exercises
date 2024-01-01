const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z1-9 ]/g, "");
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    console.log(str)
    const rev = Array.from(str).reverse().join("");
    return rev===str? true:false;
};
// Do not edit below this line
module.exports = palindromes;
