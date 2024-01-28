const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal-window');
 
if(modals){
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(e=>{
                e.style.display = "none";
            })
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });
    modals.forEach((e)=>{
        const closeBtn = e.querySelector('.modal-window__close');
        const form = e.querySelector('form');
        if(form){
            form.addEventListener('submit', (e)=>{
                close_window(e);
               
            })
        }
        
        closeBtn.addEventListener('click', (e)=>{
            e.currentTarget.closest('.modal-window').style.display = "none";
        })
        e.addEventListener('click', (event)=>{
            if(event.target.classList.contains('modal-window') && e.style.display !== 'none'){
                e.style.display = "none";
            } 
        })
    })
    
}


function close_window(event){
    event.target.closest('.modal-window').style.display = "none";
}


 
 

// if(forms){
//     forms.forEach(e => {

//         e.addEventListener('submit', function(event) {
//             event.preventDefault(); // Предотвращаем действие по умолчанию (перезагрузку страницы)
//             modals.forEach(e=>{
//                 e.style.display="none";
//             })
//             var formData = new FormData(e); // Создаем объект FormData и передаем форму в качестве аргумента
        
//             // Отправляем форму
//             fetch(e.action, {
//                 method: e.method,
//                 body: formData
//             })
//                 .then(function(response) {
//                 // Обработка успешного ответа от сервера
//                 console.log('Форма успешно отправлена');
//                 console.log(response); // Выводим ответ сервера в консоль
//                 })
//                 .catch(function(error) {
//                 // Обработка ошибки
//                 console.log('Произошла ошибка при отправке формы');
//                 console.log(error); // Выводим сообщение об ошибке в консоль
//                 });
//             });
//     });
// }
