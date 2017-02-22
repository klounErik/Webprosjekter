//Going to get one functions for all the tabs. 
//This is for testing purposes.

function contactClick(){
    $(".contact").show();
    $(".resume").hide();
    $(".work").hide();
    $(".about").hide();
    $(".overliner").hide();
    
}

function resumeClick(){
    $(".contact").hide();
    $(".resume").show();
    $(".work").hide();
    $(".about").hide();
    $(".overliner").hide();
}

function aboutClick(){
    $(".contact").hide();
    $(".resume").hide();
    $(".work").hide();
    $(".about").show();
    $(".overliner").hide();
}

function FrontpageClick(){
    $(".contact").hide();
    $(".resume").hide();
    $(".work").hide();
    $(".about").hide();
    $(".overliner").show();
}

function workClick(){
    $(".contact").hide();
    $(".resume").hide();
    $(".work").show();
    $(".about").hide();
    $(".overliner").hide();
}



