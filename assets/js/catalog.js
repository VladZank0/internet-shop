(function(){
    let body = document.querySelector('body');
    let catalog_btn = document.querySelector('.catalog-btn');
    let catalog = document.querySelector('.catalog__inner');
    let mobile_catalogBtn = document.querySelector('.mobile-catalog-btn');
    let mobile_catalog = document.querySelector('.mobile-catalog');
    catalog_btn.addEventListener('click', () => {
        catalog_btn.classList.toggle('catalog-btn_active');
        catalog.classList.toggle('catalog__inner_active');
        window.scrollTo({
            top: 0
        });
    })
    body.addEventListener('click', (event) => {
        if(!catalog.contains(event.target) && !catalog_btn.contains(event.target)){
            catalog_btn.classList.remove('catalog-btn_active');
            catalog.classList.remove('catalog__inner_active');
        }  
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
    }

    let catalog_list = document.querySelector('.catalog-page__catalog-list');
    if(catalog_list){
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

    let mobile_filter_btn = document.querySelector('.mobile-filter-btn');
    let mobile_filter = document.querySelector('.mobile-filter');
    let mobile_filter_close = document.querySelector('.mobile-filter__close-btn');

    let mobile_sort_btn = document.querySelector('.mobile-sort-btn');
    let mobile_sort = document.querySelector('.mobile-sort');
    let mobile_sort_close = document.querySelector('.mobile-sort__close-btn');

    function sort_close(){
        mobile_sort_btn.classList.remove('mobile-sort-btn_active');
        mobile_sort.classList.remove('mobile-sort_active');
        console.log('выполнение закрытия сорт')
    }
    function catalog_close(){
        mobile_catalogBtn.classList.remove('mobile-catalog-btn_active');
        mobile_catalog.classList.remove('mobile-catalog_active');
        if(body.style.overflow === "hidden"){
            body.style.overflow = 'auto';
        }else body.style.overflow = 'hidden';
    }
    function filter_close(){
        mobile_filter.classList.remove('mobile-filter_active');
        mobile_filter_btn.classList.remove('mobile-filter-btn_active');
    }

    if(mobile_catalogBtn){
        mobile_catalogBtn.addEventListener('click', () => {
            if(mobile_filter_btn || mobile_sort_btn){
                if(mobile_filter_btn.classList.contains('mobile-filter-btn_active')){
                    filter_close();
                }else if(mobile_sort_btn.classList.contains('mobile-sort-btn_active')){
                    sort_close();
                }
            }
            mobile_catalogBtn.classList.toggle('mobile-catalog-btn_active');
            mobile_catalog.classList.toggle('mobile-catalog_active');
            if(body.style.overflow === "hidden"){
                body.style.overflow = 'auto';
            }else body.style.overflow = 'hidden';
        })
    }
    if(mobile_filter_btn){
        mobile_filter_btn.addEventListener('click', ()=>{
            if(mobile_sort_btn.classList.contains('mobile-sort-btn_active')){
                sort_close();
            }else if(mobile_catalogBtn.classList.contains('mobile-catalog-btn_active')){
                catalog_close();
            }
            mobile_filter.classList.toggle('mobile-filter_active');
            mobile_filter_btn.classList.toggle('mobile-filter-btn_active');            
        })
        mobile_filter_close.addEventListener('click', ()=>{
            mobile_filter.classList.remove('mobile-filter_active');
            mobile_filter_btn.classList.remove('mobile-filter-btn_active');
        })
    }
    if(mobile_sort_btn){
        mobile_sort_btn.addEventListener('click', ()=>{
            if(mobile_filter_btn.classList.contains('mobile-filter-btn_active')){
                filter_close();
            }else if(mobile_catalogBtn.classList.contains('mobile-catalog-btn_active')){
                catalog_close();
            }
            mobile_sort.classList.toggle('mobile-sort_active');
            mobile_sort_btn.classList.toggle('mobile-sort-btn_active');
        })
        mobile_sort_close.addEventListener('click', ()=>{
            mobile_sort.classList.remove('mobile-sort_active');
            mobile_sort_btn.classList.remove('mobile-sort-btn_active');
        })

        let sort_options = document.querySelectorAll('.mobile-sort__list-item');
        sort_options.forEach((option)=>{
            option.addEventListener('click', (e)=>{
                sort_options.forEach((el)=>{
                    el.classList.remove('mobile-sort__list-item_active');
                })
                e.currentTarget.classList.add('mobile-sort__list-item_active');
            })
        })
    }

}())