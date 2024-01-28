(function (){
    document.querySelectorAll('.phone-input').forEach((e) => {
        const phoneMask = IMask( e, { mask: '+{7} 000 000 00 00' })
    })

    let sms_code_inputs = document.querySelectorAll('.sms-code__input');
    
    function handleInputField({ target }) {
        const value = target.value.slice(0, 1);
        target.value = value;
    
        const step = value ? 1 : -1;
        const inputIndex = [...sms_code_inputs].findIndex((e) => e === target);
        const focusToIndex = inputIndex + step;
    
        if (focusToIndex < 0 || focusToIndex >= sms_code_inputs.length) return;
    
        sms_code_inputs[focusToIndex].focus();
    }
    if(sms_code_inputs){
        sms_code_inputs.forEach((input) => {
            input.addEventListener("input", handleInputField);
        });    
    }
    
    function codeFailure(){
        clearCode()
        sms_code_inputs.forEach(e=>{
            e.classList.add('sms-code__input_failure');
        })
    }
    function codeSuccess(){
        clearCode()
        sms_code_inputs.forEach(e=>{
            e.classList.add('sms-code__input_success');
        })
    }

    function clearCode(){
        sms_code_inputs.forEach((e) => {
            // e.value = '';
            e.classList.remove('sms-code__input_failure');
            e.classList.remove('sms-code__input_success');
        });
    }


}())