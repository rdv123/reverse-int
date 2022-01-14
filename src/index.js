module.exports = function reverse(n) {
    let s;
    let newN;
    if (n > 0) {
        s = String(n).split("").reverse().join("");
        newN = Number(s);
    } else {
        s = String(n).split("").slice(1).reverse().join("");
        newN = Number(s);
    }

    return newN;
};
