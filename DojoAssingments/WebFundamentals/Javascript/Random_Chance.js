var x = Math.random();
var y = Math.floor(x*100);
var quarters = y;
console.log(quarters)
function gameChance(quarters) {
    for(var game = quarters; game > 0; game--){
        var temp = Math.random();
        if (Math.floor(temp*100) == 1){
            quarters -= 1;
            console.log("YOU WON!!! "+ quarters)
            break;
        }
        if (Math.floor(temp*100) > 1) {
            console.log("Try Again");
        }
    }
}
gameChance(quarters);