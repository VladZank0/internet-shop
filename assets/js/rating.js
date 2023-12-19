(function(){

    let ratingInputs = document.querySelectorAll('.rating-input__star-input');

    function updateRating() {
        var ratingValue = parseInt(this.value);

        ratingInputs.forEach(function(input) {
            let inputRatingValue = parseInt(input.value);
            if(inputRatingValue <= ratingValue){
                input.classList.add('rating-input__star-input_active');
            }else if(inputRatingValue > ratingValue){
                input.classList.remove('rating-input__star-input_active');
            }
        });
    }
    ratingInputs.forEach(function(input) {
        input.addEventListener('change', updateRating);
    });

}())