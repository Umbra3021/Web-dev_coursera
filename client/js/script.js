//closing navbar once it loses focus

$(function () {


    $("#navbartoggler").blur(function(event){

        var screenWidth = window.innerWidth;
        if(screenWidth<768) {
            $("#navbarText").collapse("hide");
        }
    });
});

//loading the main page dynamically

(function(global){

var dc = {};
var home = "snippets/home-snippet.html";
var insertHtml = function(selector,html) {

    var target = document.querySelector(selector);
    target.innerHtml = html;
    
};

var loading = function (selector) {

    var html = "<div class ='text-center'>";
    html += "<img src ='load.gif'></div>";
    insertHtml(selector,html);
};

document.addEventListener("DOMContentLoaded",function(event){

    loading("#main-content");
    $ajaxUtils.sendGetRequest(
        home,function(responseText) {
            document.querySelector("#main-content")
                .innerHTML = responseText;
        },
        false);
});

global.$dc=dc;

})(window);