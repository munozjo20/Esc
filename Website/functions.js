window.onscroll = function() {scrollFunc()};

let header = document.getElementById("myHeader");

let stick = headrt.offsetTop;

function scrollFunc(){
    if (window.pageYOffset > stick){
    header.classList.add("stick");
    }
    else{
        header.classList.remove("stick");
    }
}