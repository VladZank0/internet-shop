(function(){
    let body = document.querySelector('body');
    let open_burger_btn = document.querySelector('.burger-btn');
    let close_burger_btn = document.querySelector('.burger-btn_close');
    let burger_menu = document.querySelector('.burger-menu');
    
    open_burger_btn.addEventListener('click', () => {
        // if(body.style.overflow === "hidden"){
        //     body.style.overflow = 'auto';
        // }else body.style.overflow = 'hidden';
        burger_menu.classList.add('burger-menu_active');
    })
    close_burger_btn.addEventListener('click', () => {
        // if(body.style.overflow === "hidden"){
        //     body.style.overflow = 'auto';
        // }else body.style.overflow = 'hidden';
        burger_menu.classList.remove('burger-menu_active');
    })
    body.addEventListener('click', (e) => {
        if(!burger_menu.contains(e.target) && !document.querySelector('.header-top').contains(e.target)){
            burger_menu.classList.remove('burger-menu_active');
        }
    })

}())