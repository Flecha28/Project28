/**
 * Created by david on 6/24/2015.
 */


$(document).ready(function(){
    });

$('#toto').click(function(){
    $('#toto').hide();
});
$(':input').focusin(function(){
    $(this).css('background-color', 'green');
});
$(':input').blur(function(){
    $('this').css('background-color', 'fff');
});


$('#cbShowPassword').click(function(){
    $('#txtPassword').attr('type', $(this).is(':checked') ? 'text' : 'password');

    });

});


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> <div class="timestamp-wrap"> Updated on <span class="timestamp"></span> </div>

