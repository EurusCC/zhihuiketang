//轮播图1

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



function getIndexHead ()
{
    var ajax_ = new XMLHttpRequest() || new ActiveXObject( 'Microsoft.XMLHTTP' );

    ajax_.open( 'get', 'http://www.chenfuguo.cn:5600/getIndexHead' )
    ajax_.send()

    ajax_.onreadystatechange = function ()
    {
        if ( ajax_.readyState == 4 )
        {
            if ( ajax_.status == 200 )
            {
                var data = JSON.parse( ajax_.responseText ).indexData.data;

                show( data );
            } else
            {
                console.log( '请求失败' );
            }
        }

    }
}
function show ( data_ )
{
    var nav2 = document.querySelector( '.nav2' );
    var str = '';
    for ( var item of data_ )
    {
        str += `
            <li >
                <a class='type1' href='${ item.goUrl }'>${ item.txt }</a>
            </li>
            `
    }
    nav2.innerHTML = str;
}


// 导航栏滚动
window.addEventListener( 'scroll', function ()
{
    var nav = this.document.querySelector( '.nav' )
    var logo = this.document.querySelector( '#logo' )

    var scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ( scrollY > 10 )
    {
        nav.style.background = '#fffffff0'
        nav.style.boxShadow = '0px 0px 10px 5px rgba(0, 0, 0, 0.3)'
        logo.src = './img/logo1.77137f01.png'

        // type1.style.color = 'black'

    } else
    {
        nav.style.background = '#e1dfdf0a'
        nav.style.boxShadow = ''
        logo.src = './img/logo.png'

    }
    var type1 = document.getElementsByClassName( 'type1' )
    for ( var item of type1 )
    {
        if ( scrollY > 10 )
        {
            item.style.color = 'black'

        } else
        {
            item.style.color = 'white'
        }
    }

} )

//图片悬浮更换并且上移10px
const icons = document.querySelectorAll( '.icon' );

icons.forEach( icon =>
{
    const originalSrc = icon.getAttribute( 'data-original-src' );
    const hoverSrc = icon.getAttribute( 'data-hover-src' );

    const parentElement = icon.parentElement;

    parentElement.addEventListener( 'mouseover', () =>
    {
        icon.setAttribute( 'src', hoverSrc );
        icon.classList.add( 'hovered' );
    } );

    parentElement.addEventListener( 'mouseout', () =>
    {
        icon.setAttribute( 'src', originalSrc );
        icon.classList.remove( 'hovered' );
    } );
} );
//轮播图二
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


// 触摸翻转
var pics = document.getElementsByClassName( 'pic' );

function handleMouseEnter ( p, imgs )
{
    p.style.display = 'block';
    imgs.style.display = 'none';
}

function handleMouseLeave ( p, imgs )
{
    p.style.display = 'none';
    imgs.style.display = 'block';
}
for ( var j = 0; j < pics.length; j++ )
{
    var lis = pics[ j ].children;
    for ( var i = 0; i < lis.length; i++ )
    {
        var p = lis[ i ].children[ 0 ];
        var imgs = lis[ i ].children[ 1 ];
        lis[ i ].onmouseenter = handleMouseEnter.bind( null, p, imgs );
        lis[ i ].onmouseleave = handleMouseLeave.bind( null, p, imgs );
    }
}

//回到顶部
function scrollToTop ()
{
    window.scrollTo( {
        top: 0,
        behavior: 'smooth' // 平滑滚动到顶部
    } );
}



document.querySelector( '.left4' ).addEventListener( 'mouseenter', function ()
{
    document.querySelector( '.flo' ).style.display = 'block';
} );
document.querySelector( '.left4' ).addEventListener( 'mouseleave', function ()
{
    document.querySelector( '.flo' ).style.display = 'none';
} );

var left4 = document.querySelector( '.left4' )
var flo = document.querySelector( '.flo' )
left4.addEventListener( 'mouseenter', function ()
{

    window.event ? event.cancelBubble = true : event.stopPropagation();


    flo.style.display = 'block'

} )
left4.addEventListener( 'mouseleave', function ()
{

    window.event ? event.cancelBubble = true : event.stopPropagation();


    flo.style.display = 'none'

} )
document.onmouseenter = function ()
{
    flo.style.display = 'none'

}
flo.onmouseenter = function ()
{

    window.event ? event.cancelBubble = true : event.stopPropagation();
    flo.style.display = 'block'
}
flo.onmouseleave = function ()
{
    window.event ? event.cancelBubble = true : event.stopPropagation();
    flo.style.display = 'none'
}