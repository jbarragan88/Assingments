for (var daysUntilMyBirthday = 60; daysUntilMyBirthday > 0; daysUntilMyBirthday--) 
{
    if ( daysUntilMyBirthday > 30) 
    {
        console.log( daysUntilMyBirthday + " days until my birthday I guess.");
    }
    else if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5)  
    {
        console.log( daysUntilMyBirthday + " days left to kill!");
    }
    else if (daysUntilMyBirthday <= 5 && daysUntilMyBirthday >= 1) 
    {
        console.log( "THERE'S " + daysUntilMyBirthday + " DAYS LEFT!");
    }
}
console.log("HAPPY BIRTHDAY TO MYSELF!!!");