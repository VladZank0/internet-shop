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
            e.currentTarget.closest('.modal-window').style.display = "none";
        })
        e.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal-window') && e.style.display !== 'none'){
                e.style.display = "none";
            } 
        })
    })
   
}())