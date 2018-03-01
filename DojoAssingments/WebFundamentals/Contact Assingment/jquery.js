$(document).ready(function(){
    //alert('jquery');
    $('#submit').click(function(){
        var fname = $('#first_name').val(); //grab the input forms
        var lname = $('#last_name').val();
        var descript = $('#description').val();
        $('#rightside').append(`<div class="info"><h1>${fname} ${lname}</h1> <p>Click for description</p></div>`);
        return false
        });

        $('#rightside').on('click', 'p', function(){
            
              alert('you clicked paragraph');
        });
});