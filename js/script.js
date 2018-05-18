$(document).ready(function(){

$('.footer').css('margin-top', $(document).height() - ($('.main_container1').height() + $('.topnav').height() + $('.footer').height()) -60);

});

// Document height - conainter = margin top of footer //
// margin top of footer is calculated dynamically //

// $('.footer').css('margin-top', $(document).height() - ($('.main_container1').height() + $('.footer').height()));