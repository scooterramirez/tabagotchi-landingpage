$(document).ready(function(){
    $(".faq a").click(function(){
        $(".overlay").fadeToggle(200);
       // $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    // $(".faq a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
