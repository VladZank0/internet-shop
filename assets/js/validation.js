(function (){
    document.querySelectorAll('.phone-input').forEach((e) => {
        const phoneMask = IMask( e, { mask: '+{7} 000 000 00 00' })
    })

    let sms_code_inputs = document.querySelectorAll('.sms-code__input');
    let hidden_sms_code = document.querySelector('.sms-code__input_hidden');
    
    function handleInputField({ target }) {
        const value = target.value.slice(0, 1);
        if (!/^\d*$/.test(value)) {
            target.value = target.value.replace(/\D/g, '');
            return;
        }
        target.value = value;
    
        const step = value ? 1 : -1;
        const inputIndex = [...sms_code_inputs].findIndex((e) => e === target);
        const focusToIndex = inputIndex + step;
    
        if (focusToIndex < 0 || focusToIndex >= sms_code_inputs.length) return;
    
        sms_code_inputs[focusToIndex].focus();

        const codeValues = Array.from(sms_code_inputs).map((input) => input.value);
        hidden_sms_code.value = codeValues.join('');
    }
    
    
    if(sms_code_inputs.length){
        sms_code_inputs.forEach((input) => {
            input.addEventListener("input", handleInputField);
        });    
        sms_code_inputs[sms_code_inputs.length - 1].addEventListener('input', () => {
            const codeValues = Array.from(sms_code_inputs).map((input) => input.value);
            hidden_sms_code.value = codeValues.join('');
        });
    }
    
    function codeFailure(){
        clearCode();
        sms_code_inputs.forEach(e=>{
            e.classList.add('sms-code__input_failure');
        })
    }
    function codeSuccess(){
        clearCode();
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