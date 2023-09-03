let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.links');


menu.addEventListener('click', transButton);

function transButton(){
    if(navbar.style.maxHeight=="0px"){
        navbar.style.maxHeight="250px";
    }

    else{
        navbar.style.maxHeight="0px";
    }
}