
window.app.initFullPage = () => {

    //function initSlider() {

       /*  const sliderFullPage = new Swiper('.page', {
    
            wrapperClass: 'page__wrapper',
            slideClass: 'page__screen',
    
            direction: 'vertical',
    
            slidesPerView: 'auto',
    
            paralax: true,
    
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
    
            mousewheel:{
                sensitivity: 1,
            },
    
            watchOverflow: true,
    
            speed: 800,
    
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
    
            pagination: {
                el: '.page__pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'page__bullet',
                bulletActiveClass: 'page__bullet-active',
            },
    
            scrollbar: {
                el: '.page__scroll',
                gragClass: 'page__drag-scroll',
                draggable: true
            }
    
        }); */

    //}

    const fullSlider = document.querySelector('.page');
    let myFullSwiper;

    function desctopSlider(){
        if(window.innerWidth >= 1200){
            const sliderFullPage = new Swiper('.page', {
        
                /* navigation: {
                nextEl: '.news-slider__prev',
                prevEl: '.news-slider__next',
                }, */
        
                wrapperClass: 'page__wrapper',
                slideClass: 'page__screen',
        
                direction: 'vertical',
        
                slidesPerView: 'auto',
        
                paralax: true,
        
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
        
                mousewheel:{
                    sensitivity: 1,
                },
        
                watchOverflow: true,
        
                speed: 800,
        
                //observer: true,
                //observeParents: true,
                //observeSlideChildren: true,
        
                pagination: {
                    el: '.page__pagination',
                    type: 'bullets',
                    clickable: true,
                    bulletClass: 'page__bullet',
                    bulletActiveClass: 'page__bullet-active',
                },
        
                scrollbar: {
                    el: '.page__scroll',
                    gragClass: 'page__drag-scroll',
                    draggable: true
                }
        
            });


        }
        if(window.innerWidth < 1200){


            if(fullSlider.classList.contains('swiper-container-initialized')){
                sliderFullPage.destroy()
                sliderFullPage.mousewheel.disable()

            }
            
        }
    }

    desctopSlider();

    window.addEventListener('resize', desctopSlider());


};


window.app.initFullPage();