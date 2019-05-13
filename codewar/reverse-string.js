function descendingOrder(n){
    var numero = n+'';
    var invertido = numero.split("").sort(sortAsd).join("");
    return parseInt(invertido);
}

function sortAsd(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}


console.log(descendingOrder(1012));