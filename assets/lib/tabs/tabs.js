function tabs(e){
    let tabsParent = e.target.closest('.tabs-container');
    let contentID = e.target.getAttribute('data-content');
    
    tabsParent.querySelectorAll('.tab').forEach(element => {
        if (element.closest('.tabs-container') === tabsParent){
            element.classList.remove('tab_active');
        }
    });
    tabsParent.querySelectorAll('.tab-content').forEach(element => {
        if (element.closest('.tabs-container') === tabsParent){
            element.classList.remove('tab-content_active');
        }
    });
    e.target.classList.add('tab_active');
    tabsParent.querySelector(contentID).classList.add('tab-content_active');
    
}
