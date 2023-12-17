const menu = document.getElementById('sidemenu')

function openmenu(){

menu.style.right = "0"
}

function closemenu(){

    menu.style.right = "-200px"
    }

menu.addEventListener("click",closemenu)