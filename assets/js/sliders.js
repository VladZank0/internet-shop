const hero_slider = new Swiper ('.hero__slider', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bullets: true,
      
    },

    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
    slidesOffsetAfter:false,
    dynamicBullets: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
})
const product_slider = new Swiper ('.product-slider', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bullets: true,
    },

    spaceBetween: 16.5,
    watchOverflow: true,
    slidesPerView: "auto",
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
    slidesOffsetAfter:false,
    dynamicBullets: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
   
    
})
const blog_slider = new Swiper ('.blog-slider', {

    spaceBetween: 15,
    slidesPerView: "auto",
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
    slidesOffsetAfter:false,
    dynamicBullets: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
})
const selections_slider = new Swiper ('.selections__item_slider', {

    spaceBetween: 20,
    slidesPerView: "auto",
    centeredSlidesBounds:true,
    observer: true,
    observeParents: true,
    loop:false,
    slidesOffsetAfter:false,
    dynamicBullets: true,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
})
const news_slider = new Swiper ('.news__slider', {
  spaceBetween: 29,
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter:false,
  dynamicBullets: true
})


const compareSlider = new Swiper('.comparison-page__main-slider', {
  spaceBetween: 55,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 16
    },
    577: {
      spaceBetween: 55
    }
  },

  navigation: {
    nextEl: '.comparison-page__main-slider-button-next',
    prevEl: '.comparison-page__main-slider-button-prev',
  },

});

const compareSlider_fixed = new Swiper('.comparison-page__main-fixed-slider', {
  spaceBetween: 55,
  slidesPerView: "auto",
  breakpoints: {
    0: {
      spaceBetween: 16
    },
    577: {
      spaceBetween: 55
    }
  },
  navigation: {
    nextEl: '.comparison-page__main-slider-button-next',
    prevEl: '.comparison-page__main-slider-button-prev',
  },

});
// Инициализация дочерних слайдеров
const dataSliders = document.querySelectorAll('.comparison-page__row-slider');

const childSliders = [compareSlider_fixed];

dataSliders.forEach(function (dataSlider) {
  const childSlider = new Swiper(dataSlider, {
    spaceBetween: 55,
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      0: {
        spaceBetween: 16
      },
      577: {
        spaceBetween: 55
      }
    },
  });


  childSliders.push(childSlider);
});

// Установка массива дочерних слайдеров в качестве контроллера для основного слайдера
compareSlider.controller.control = childSliders;
compareSlider_fixed.controller.control = compareSlider;

window.addEventListener('scroll', function () {
  const triggerBlockTop = document.querySelector('.comparison-page__main-slider').getBoundingClientRect().top;
  const isVisible = window.scrollY - 450 > triggerBlockTop;

  if (isVisible) {
      document.querySelector('.comparison-page__main-fixed-slider').classList.add('comparison-page__main-fixed-slider_shown');
  } else {
      document.querySelector('.comparison-page__main-fixed-slider').classList.remove('comparison-page__main-fixed-slider_shown');
  }
})
