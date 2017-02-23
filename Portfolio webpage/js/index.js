

$("nav > a").click(function(event){
    $(".modal").hide();
var foo = $(this).attr("href")
var currentClass = foo;   
    $(foo).show();
    if(foo != "#"){
       $(".overliner").hide();
    } else{
        $(".overliner").show();
    }
})
