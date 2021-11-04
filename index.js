$(document).ready(function(){
    $("img").click(function(){
        $(this).hide();
    })
    $("button").click(function(){
        if($("img").hide()){
            $("img").show();
        }
    })
})
    