let currentPlace = document.querySelector(".current-place");
let allPath = document.querySelectorAll (".map path");


allPath.forEach (x=> {
    x.addEventListener("mouseover",_x=> {
        currentPlace.innerText = x.getAttribute("title");

    })
});
