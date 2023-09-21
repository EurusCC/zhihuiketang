//给body getIndexHead
window.onload = function ()
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
// var type1 = document.querySelectorAll( '.type1' );
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



//回到顶部
function scrollToTop ()
{
    window.scrollTo( {
        top: 0,
        behavior: 'smooth' // 平滑滚动到顶部
    } );
}


//底部悬浮
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


document.querySelector( '.left4' ).addEventListener( 'mouseenter', function ()
{
    document.querySelector( '.flo' ).style.display = 'block';
} );
document.querySelector( '.left4' ).addEventListener( 'mouseleave', function ()
{
    document.querySelector( '.flo' ).style.display = 'none';
} );