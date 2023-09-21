





var none = document.querySelectorAll( '.none' )
// console.log( none );
var li = document.querySelectorAll( '.up' )

var bg = document.querySelector( '.bg' )
var bg2 = document.querySelector( '.bg2' )
var container = document.querySelector( '#container' )

for ( let i = 0; i < li.length; i++ )
{

    li[ i ].setAttribute( 'index', i )
    li[ i ].onclick = function ()
    {

        var ind = this.getAttribute( 'index' )
        for ( var k = 0; k < li.length; k++ )
        {

            li[ k ].classList.remove( 'border' )
            li[ ind ].classList.add( 'border' )
            // console.log( li[ k ].firstElementChild.firstElementChild );

            li[ k ].firstElementChild.firstElementChild.style.display = 'block'
            li[ k ].firstElementChild.lastElementChild.style.display = 'none'


            li[ ind ].firstElementChild.firstElementChild.style.display = 'none'
            li[ ind ].firstElementChild.lastElementChild.style.display = 'block'
        }
        for ( var m = 0; m < none.length; m++ )
        {
            none[ m ].style.display = 'none';
            none[ m ].classList.remove( 'active1' )

            none[ ind ].style.display = 'block';
            none[ ind ].classList.add( 'active1' )



        }
        if ( ind > 4 )
        {
            bg.appendChild( bg2 )
        } else
        {
            container.appendChild( bg2 )

        }
    }


}










//轮播图
var mySwiper = new Swiper( ".swiper1", {
    direction: "horizontal", // 切换选项水平horizontal  垂直vertical
    loop: true, // 循环模式选项 true 允许循环 // 如果需要分页器

    pagination: {
        el: ".swiper-pagination", // type: 'progressbar',
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',

        renderBullet: function ( index, className )
        {
            return '<span class=" ' + className + '"></span>';
        },
    }, // 如果需要前进后退按钮

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, // 如果需要滚动条

    scrollbar: {
        // el: '.swiper-scrollbar',
    }, // autoplay: true,//等同于以下设置
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    effect: "slide",
} );
mySwiper.el.onmouseover = function ()
{
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseleave = function ()
{
    mySwiper.autoplay.start();
}
// 鼠标悬浮停止滚动
mySwiper.el.onmouseover = function ()
{
    mySwiper.autoplay.stop();
    // 鼠标悬浮显示箭头
    mySwiper.navigation.$nextEl.removeClass( 'hide' )
    mySwiper.navigation.$prevEl.removeClass( 'hide' )
}
mySwiper.el.onmouseleave = function ()
{
    mySwiper.autoplay.start();
    // 鼠标悬浮显示箭头
    mySwiper.navigation.$nextEl.addClass( 'hide' )
    mySwiper.navigation.$prevEl.addClass( 'hide' )
}








