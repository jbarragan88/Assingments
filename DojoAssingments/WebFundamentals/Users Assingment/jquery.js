$(document).ready(function(){
    alert("Page has loaded");

    $("#submit").click(function(){
        $(".update").append("<td>input</td>");
        alert("You Have Submited");
        return false
    });
});