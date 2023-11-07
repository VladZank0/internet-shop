(function(){
    let body = document.querySelector('body');
    let catalog_btn = document.querySelector('.catalog-btn');
    let catalog = document.querySelector('.catalog__inner');
    let mobile_catalogBtn = document.querySelector('.mobile-catalog-btn');
    let mobile_catalog = document.querySelector('.mobile-catalog');
    catalog_btn.addEventListener('click', () => {
        catalog_btn.classList.toggle('catalog-btn_active');
        catalog.classList.toggle('catalog__inner_active');
    })
    body.addEventListener('click', (event) => {
        if(!catalog.contains(event.target) && !catalog_btn.contains(event.target)){
            catalog_btn.classList.remove('catalog-btn_active');
            catalog.classList.remove('catalog__inner_active');
        }  
    })
    mobile_catalogBtn.addEventListener('click', () => {
        mobile_catalogBtn.classList.toggle('mobile-catalog-btn_active');
        mobile_catalog.classList.toggle('mobile-catalog_active');
        if(body.style.overflow === "hidden"){
            body.style.overflow = 'auto';
        }else body.style.overflow = 'hidden';
    })
}())
const menu = new MmenuLight( document.querySelector( '#menu' ), 'all');
var navigator = menu.navigation({
    // selectedClass: 'Selected',
    // slidingSubmenus: true,
    // theme: 'dark',
    // title: 'Menu'
});
