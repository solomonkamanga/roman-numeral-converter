function convertToRoman(num) {
    var romanSymbols = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var integerValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var romanNumerals = "";

    for (var i = integerValue.length - 1; num > 0; i--) {
        while (num >= integerValue[i]) {
            romanNumerals += romanSymbols[i];
            num -= integerValue[i];
        }
    }
    return romanNumerals;
}

console.log(convertToRoman(36));