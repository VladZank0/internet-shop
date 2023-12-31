(function(){

    const modalButtons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal-window');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });
    modals.forEach((e)=>{
        const closeBtn = e.querySelector('.modal-window__close');
        closeBtn.addEventListener('click', (e)=>{
            e.target.closest('.modal-window').style.display = "none";
        })
        e.addEventListener('click', (el)=>{
            if(!e.querySelector('.modal-window__container').contains(el.target) && e.style.display !== 'none'){
                e.style.display = "none";
            } 
        })
    })
   
}())