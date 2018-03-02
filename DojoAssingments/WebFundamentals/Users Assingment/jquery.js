$(document).ready(function(){
    alert("Page has loaded");

    $("#submit").click(function(){
        var fname = $('#first_name').val();         //getting forms input
        var lname = $('#last_name').val();
        var email = $('#email_address').val();
        var phone = $('#phone_number').val();
        $("table").append(`<tr><td>${fname}</td><td>${lname}</td><td>${email}</td><td>${phone}</td></tr>`); //creates new table row with forms input
        alert("You Have Submited");
        return false
    });
});