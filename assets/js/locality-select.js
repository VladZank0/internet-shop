(function(){

    let locality_btns = document.querySelectorAll('.locality-select__box');
    let locality_close_btns = document.querySelectorAll('.locality-select__close');
    locality_btns.forEach((e)=>{
        e.addEventListener('click', (event) => {
            e.classList.toggle('locality-select__box_active');
            let parentNode = event.currentTarget.closest('.locality-select');
            parentNode.querySelector('.locality-select__option-box').classList.toggle('locality-select__option-box_active');
        })
    })
    locality_close_btns.forEach(e => {
        e.addEventListener('click', (event) => {
            let parentNode = event.currentTarget.closest('.locality-select');
            parentNode.querySelector('.locality-select__option-box').classList.remove('locality-select__option-box_active');
            parentNode.querySelector('.locality-select__box').classList.remove('locality-select__box_active');
        })
    })
    document.querySelector('body').addEventListener('click', (event)=>{
        if(!event.target.closest('.locality-select') ){
            if(document.querySelector('.locality-select__box_active')){
                document.querySelector('.locality-select__box_active').classList.remove('locality-select__box_active');
            }
            document.querySelectorAll('.locality-select__option-box').forEach(e => {
                e.classList.remove('locality-select__option-box_active');
            })
        }
    })

}())