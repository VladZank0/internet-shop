(function(){

    let catalog_tags_btn = document.querySelector('.catalog-page__tags-show-btn');
    let catalog_tags = document.querySelectorAll('.catalog-page__tag');
    let counter = 0;
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
}())