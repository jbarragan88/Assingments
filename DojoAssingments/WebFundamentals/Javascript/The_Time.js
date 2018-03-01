var HOUR = 8;
var MINUTE = 23;
var PERIOD = "AM";
if (HOUR == 8 && PERIOD == "AM") 
{
    if (MINUTE >= 50) 
    {
        console.log("It's Almost 9 in the morning! WAKE UP!");
    }
    else if (MINUTE == 30) 
    {
        console.log("Half an hour until 9AM");
    }
    else if (MINUTE < 30) 
    {
        console.log("It is " + MINUTE + " past " + HOUR);
    }
}
else if (HOUR == 7 && PERIOD == "PM") 
{
    console.log("It's just after 7 in the evening.")
}
console.log("It is " + HOUR +":"+ MINUTE + PERIOD);