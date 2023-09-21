
// 知识产权切换
var button = document.querySelectorAll( '.btn1' )

var rightImg = document.querySelectorAll( '.ImgBox' )

// var slides = document.querySelectorAll('.slide');
// var prevBtn = document.getElementById('prevBtn');
// var nextBtn = document.getElementById('nextBtn');
var currentSlide = 0;

// 显示初始的幻灯片
showSlide( currentSlide );

// 点击上一个按钮
button[ 0 ].addEventListener( 'click', function ()
{
    currentSlide--;
    if ( currentSlide < 0 )
    {
        currentSlide = rightImg.length - 1;
    }
    showSlide( currentSlide );
} );

// 点击下一个按钮
button[ 1 ].addEventListener( 'click', function ()
{
    currentSlide++;
    if ( currentSlide >= rightImg.length )
    {
        currentSlide = 0;
    }
    showSlide( currentSlide );
} );
// 显示指定幻灯片
function showSlide ( index )
{
    for ( var i = 0; i < rightImg.length; i++ )
    {
        rightImg[ i ].style.display = 'none';
    }
    rightImg[ index ].style.display = 'block';
}
var mySwiper2 = new Swiper( '.swiper2', {
    direction: 'horizontal', // 垂直切换选项 vertical

    loop: true, // 循环模式选项  true 允许循环 轮播图切换到最后一个后 来到第一个

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'true',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // 切换效果
    effect: 'flip',
} )



var NavList1 = document.querySelectorAll( '.NavList1' )
var tabDiv = document.querySelectorAll( ".tabDiv" )
for ( let i = 0; i < NavList1.length; i++ )
{

    NavList1[ i ].setAttribute( 'index', i )
    NavList1[ i ].onclick = function ()
    {
        var ind = this.getAttribute( 'index' )

        for ( let k = 0; k < NavList1.length; k++ )
        {
            NavList1[ k ].parentElement.classList.remove( 'active' )
            NavList1[ ind ].parentElement.classList.add( 'active' )

        }

        for ( var m = 0; m < tabDiv.length; m++ )
        {
            tabDiv[ m ].classList.add( 'none' )
            // tabDiv[ m ].classList.remove( 'active1' )
            tabDiv[ ind ].classList.remove( 'none' )
            // tabDiv[ ind ].classList.add( 'active1' )
        }
    }
    // NavList1[ i ].onmouseenter = function ()
    // {
    //     var ind = this.getAttribute( 'index' )

    //     for ( let k = 0; k < NavList1.length; k++ )
    //     {
    //         NavList1[ k ].parentElement.classList.remove( 'active' )
    //         NavList1[ ind ].parentElement.classList.add( 'active' )

    //     }
    // }
    // NavList1[ i ].onmouseleave = function ()
    // {
    //     var ind = this.getAttribute( 'index' )

    //     for ( let k = 0; k < NavList1.length; k++ )
    //     {
    //         NavList1[ k ].parentElement.classList.remove( 'active' )
    //         NavList1[ ind ].parentElement.classList.add( 'active' )

    //     }
    // }
}


var szFeaturesBox = document.querySelectorAll( '.szFeaturesBox' )
var GYMap = document.querySelector( '.GYMap' )
var SZMap = document.querySelector( '.SZMap' )
var map = document.querySelector( '.map' )
var mask = document.querySelectorAll( '.mask' )
var instruction = document.querySelectorAll( '.instruction' )

GYMap.addEventListener( 'click', function ()
{
    map.classList.remove( 'wid1' )
    map.classList.add( 'wid' )
    mask[ 0 ].style.display = 'none'
    instruction[ 0 ].style.display = 'block'
    szFeaturesBox[ 0 ].style.display = 'none'

    // SZMap.classList.remove( 'wid' )
    // SZMap.classList.add( 'wid1' )
    mask[ 1 ].style.display = 'block'
    instruction[ 1 ].style.display = 'none'
    szFeaturesBox[ 1 ].style.display = 'block'
} )

SZMap.addEventListener( 'click', function ()
{
    map.classList.remove( 'wid' )
    map.classList.add( 'wid1' )
    mask[ 1 ].style.display = 'none'
    instruction[ 1 ].style.display = 'block'
    szFeaturesBox[ 1 ].style.display = 'none'


    // GYMap.classList.remove( 'wid' )
    // GYMap.classList.add( 'wid1' )
    mask[ 0 ].style.display = 'block'
    instruction[ 0 ].style.display = 'none'
    szFeaturesBox[ 0 ].style.display = 'block'

} )