(function(){

    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal-window');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            console.log(modal)
            modal.style.display = 'flex';
        });
    });
    modals.forEach((e)=>{
        const closeBtn = e.querySelector('.modal-window__close');
        closeBtn.addEventListener('click', (e)=>{
            e.target.closest('.modal-window').style.display = "none";
        })
    })

}())