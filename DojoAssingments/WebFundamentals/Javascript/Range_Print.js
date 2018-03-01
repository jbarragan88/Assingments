var range =[-2, 58, 4]
function printRange(range) {
    for (var x = range[0]; x < range[1]; x = x+range[2]) {
        console.log(x);
    }
}
printRange(range);