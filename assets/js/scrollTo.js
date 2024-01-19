(function (){
    
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('position') && urlParams.get('position') === 'reviews') {
            const tabContent = document.querySelector(".product-tabs");
            const yOffset = tabContent.offsetTop;  
            if(window.matchMedia('(max-width:1200px)').matches){
                window.scrollTo({top: yOffset - 64, behavior: 'smooth'});  
            }else {
                window.scrollTo({top: yOffset - 137, behavior: 'smooth'});  
            } 
            document.getElementById('reviews-tab').click();
        }
    
    

    let btn = document.querySelector('.product-review__characteristics-more-button');
    if(btn){
        btn.addEventListener('click', ()=>{
            const tabContent = document.querySelector(".product-tabs");
            const yOffset = tabContent.offsetTop;  
            if(window.matchMedia('(max-width:1200px)').matches){
                window.scrollTo({top: yOffset - 64, behavior: 'smooth'});  
            }else {
                window.scrollTo({top: yOffset - 137, behavior: 'smooth'});  
            }
            document.getElementById('characteristics-tab').click();
           
        })
    }
    
    document.querySelectorAll('button.product__rating-link').forEach(e =>{
        e.addEventListener(('click'),()=>{
            const tabContent = document.querySelector(".product-tabs");
            const yOffset = tabContent.offsetTop;  
            if(window.matchMedia('(max-width:1200px)').matches){
                window.scrollTo({top: yOffset - 64, behavior: 'smooth'});  
            }else {
                window.scrollTo({top: yOffset - 137, behavior: 'smooth'});  
            } 
            document.getElementById('reviews-tab').click();
        })
    })
}())