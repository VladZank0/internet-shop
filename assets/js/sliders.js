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
    }
    
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

