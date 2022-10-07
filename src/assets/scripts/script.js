// script.js

// Script

document.addEventListener("DOMContentLoaded", () => {

    window.app = {};

    // Plugins

    @@include('./plugins/swiper.js');
    @@include('./plugins/simplebar.js');
    @@include('./plugins/fullpage.js');

    // Blocks

    @@include('./blocks/open-popup.js');
    @@include('./blocks/burger.js');
    @@include('./blocks/news-slider.js');
    @@include('./blocks/riple.js');
    @@include('./blocks/fullpage.js');

});
