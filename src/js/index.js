const scrollBtn = document.getElementById('scrollBtn')
const downBtn = document.getElementById('downBtn')

window.addEventListener('scroll',()=>{
    scrollFunction();
});

function scrollFunction() {
    if(window.scrollY > 580){
        scrollBtn.style.display = 'block'
    }else{
        scrollBtn.style.display = 'none'
    }
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Botón para bajar
downBtn.addEventListener('click',()=>{
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
})

