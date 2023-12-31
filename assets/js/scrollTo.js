(function (){
    
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('position') && urlParams.get('position') === 'reviews') {
            const tabContent = document.querySelector(".product-tabs");
            const yOffset = tabContent.offsetTop;  
            window.scrollTo({top: yOffset, behavior: 'smooth'});  
            document.getElementById('reviews-tab').click();
        }
    
    

    let btn = document.querySelector('.product-review__characteristics-more-button');

    if(btn){
        btn.addEventListener('click', ()=>{
           
            const tabContent = document.querySelector(".product-tabs");
            const yOffset = tabContent.offsetTop;  
            window.scrollTo({top: yOffset, behavior: 'smooth'});  
            document.getElementById('characteristics-tab').click();
           
        })
    }

}())