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

const menu = new MmenuLight( document.querySelector( '#menu' ), 'all');
var navigator = menu.navigation({
    // selectedClass: 'Selected',
    // slidingSubmenus: true,
    // theme: 'dark',
    // title: 'Menu'
});

let catalog_tags_btn = document.querySelector('.catalog-page__tags-show-btn');
let catalog_tags = document.querySelectorAll('.catalog-page__tag');
let counter = 0;
if(catalog_tags_btn){
    catalog_tags_btn.addEventListener('click', () => {
        counter++;
        if(counter % 2 == 0){
            catalog_tags.forEach((elem) => {
                elem.style.display = null;
                catalog_tags_btn.innerHTML = 'Показать больше';
            })
        }else {
            catalog_tags.forEach((elem) => {
                elem.style.display = 'block';
                catalog_tags_btn.innerHTML = 'Скрыть';
            })
        }
    })
    
    let catalog_list = document.querySelector('.catalog-page__catalog-list');
    let list_view_change_btn = document.querySelector('.catalog-page__view-modes-list');
    let card_view_change_btn = document.querySelector('.catalog-page__view-modes-card');
    list_view_change_btn.addEventListener('click', () => {
        list_view_change_btn.classList.add('catalog-page__view-modes-list_active');
        card_view_change_btn.classList.remove('catalog-page__view-modes-card_active');
        catalog_list.classList.add('catalog-page__catalog-list_list');
    })
    card_view_change_btn.addEventListener('click', () => {
        card_view_change_btn.classList.add('catalog-page__view-modes-card_active');
        list_view_change_btn.classList.remove('catalog-page__view-modes-list_active');
        catalog_list.classList.remove('catalog-page__catalog-list_list');
    })
    matchMedia('only screen and (min-width:1200px)').addEventListener('change', () => {
        card_view_change_btn.classList.add('catalog-page__view-modes-card_active');
        list_view_change_btn.classList.remove('catalog-page__view-modes-list_active');
        catalog_list.classList.remove('catalog-page__catalog-list_list');
    })
}


}())