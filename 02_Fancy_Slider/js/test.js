const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    //
    // // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    grabCursor: true,
    touchRatio: 1.25,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },


    mousewheel: {
        invert: true,
    },
});