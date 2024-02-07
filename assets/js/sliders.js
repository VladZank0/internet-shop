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
const watched_slider = new Swiper ('.watched-slider', {
  spaceBetween: 16,
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter: 0,
  dynamicBullets: true
})
const popular_brands_slider = new Swiper ('.popular-brands-slider', {
  spaceBetween: 16,
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter: 0,
  dynamicBullets: true
})
const collection_line_slider = new Swiper ('.collection-line-slider', {
  spaceBetween: 16,
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter: 0,
  dynamicBullets: true
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
const read_more_slider = new Swiper ('.blog-page__read-more-block', {
  spaceBetween: 24,
  watchOverflow: true,
  slidesPerView: "auto",
  loop:false,
  slidesOffsetAfter:false,
  dynamicBullets: true
})

const compareSlider = new Swiper('.comparison-page__main-slider', {
  spaceBetween: 55,
  watchOverflow: true,
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
  watchOverflow: true,
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
if(dataSliders){
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

  });
}
const product_images_thumbs_slider = new Swiper('.product-review__images-thumbs-slider', {
  slidesPerView: 6,
  spaceBetween: 13,
  slideToClickedSlide: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
     
    0:{
      spaceBetween: 2,
      slidesPerView:4
    },
    420:{
      slidesPerView:4,
      spaceBetween: 10,
    },
    490:{
      slidesPerView:5
    },
    600: {
    
    }
  },
});
const product_images_slider = new Swiper('.product-review__images-slider', {
  slidesPerView: 1,
  thumbs: {
    swiper: product_images_thumbs_slider,
  },
});
if(product_images_slider){
  product_images_slider.on('slideChange', function () {
    const activeSlideIndex = this.activeIndex;
    product_images_thumbs_slider.slideTo(activeSlideIndex - 1);
  });
}

let sidebarSlider;

function sidebarSliderInit () {
	if (!sidebarSlider) {
		sidebarSlider = new Swiper ('.sidebar-menu-slider', {
      spaceBetween: 12,
      watchOverflow: true,
      slidesPerView: "auto",
      loop:false,
      slidesOffsetAfter:false,
      dynamicBullets: true
    })
  }
}

function sidebarSliderDestroy () {
	if (sidebarSlider) {
		sidebarSlider.destroy();
		sidebarSlider = null;
	}
}
if(document.querySelector('.sidebar-menu-slider')){
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1201) {
    sidebarSliderInit()
  } else {
    sidebarSliderDestroy()
  }
  window.addEventListener('resize', ()=>{
    windowWidth = window.innerWidth;
    if (windowWidth <= 1201) {
      sidebarSliderInit()
    } else {
      sidebarSliderDestroy()
    }
  })
  
}

const account_product_slider = new Swiper ('.account-product-slider__inner', {
  spaceBetween: 30,
  watchOverflow: true,
  slidesPerView: "auto",
  loop:false,
  slidesOffsetAfter:false,
  dynamicBullets: true,
  breakpoints: {
    0: {
      spaceBetween: 24
    },
    577: {
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


 




