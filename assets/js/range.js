(function(){
    const credit_range = document.querySelector("#slider-round");

  noUiSlider.create(credit_range, {
    connect: 'lower',
    range: {
      'min': [2,2],
      '10%': [4,2],
      '20%': [6,6],
      '40%': [12,12],
      '70%': [ 24,12 ],
      'max': [ 36 ]
      },
      start: 2,
      pips: {
          mode: 'steps',
          values: 6,
      }
      
  });
  var activePips = [null, null];
  
  credit_range.noUiSlider.on('update', function (values, handle) {
      // Remove the active class from the current pip
      if (activePips[handle]) {
          activePips[handle].classList.remove('active-pip');
      }
  
      // Match the formatting for the pip
      var dataValue = Math.round(values[handle]);
  
      // Find the pip matching the value
      activePips[handle] = credit_range.querySelector('.noUi-value[data-value="' + dataValue + '"]');
  
      // Add the active class
      if (activePips[handle]) {
          activePips[handle].classList.add('active-pip');
      }
  });
  

}())