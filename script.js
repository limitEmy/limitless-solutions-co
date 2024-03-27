let change = document.getElementById('change');

function decrease(){
    change.innerHTML--;
}
function increase(){
    change.innerHTML ++;
}

// chnage images

let mainImage = document.getElementById('mainImage');
function change1(){
    mainImage.setAttribute('src', '/sneakers1.jpg')
}