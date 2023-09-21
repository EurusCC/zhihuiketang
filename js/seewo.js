function fu ()
{
    var ajax_ = new XMLHttpRequest() || new ActiveXObject( 'Microsoft.XMLHTTP' );

    ajax_.open( 'get', 'http://www.chenfuguo.cn:5600/wisdomClass' )
    ajax_.send()
    ajax_.onreadystatechange = function ()
    {
        if ( ajax_.readyState == 4 )
        {
            if ( ajax_.status == 200 )
            {
                var data = JSON.parse( ajax_.responseText ).wisdomClass.data;
                console.log( data );

                show2( data );
            } else
            {
                console.log( '请求失败' );
            }
        }
    }

}
function show2 ( data2 )
{
    var DescriptionInfo = document.querySelector( '.DescriptionInfo' )

    var str2 = ''
    for ( var a of data2 )
    {
        str2 += `
        <div class="infoitem">
                    <div class="line"></div>
                    <span>${ a.title }</span>
                    <p><a href="#">${ a.number }</a></p>
                </div>
        `
        console.log( str2 );

    }
    DescriptionInfo.innerHTML = str2


}

fu()


var down = document.querySelector( '.down' )
down.addEventListener( 'click', function ()
{
    down.style.display = 'none'
    var none = document.querySelectorAll( '.none' )
    for ( var h of none )
    {
        h.classList.remove( 'none' )
    }
} )
// 中间导航栏
window.addEventListener( 'scroll', function ()
{
    var navBar = document.querySelector( '.middleNav' );
    var scrollPosition = document.documentElement.scrollTop;
    // console.log( scrollPosition );

    if ( scrollPosition >= 1180 )
    {
        navBar.classList.add( 'floTop' )
        navBar.style.top = '19px';
    } else
    {
        navBar.classList.remove( 'floTop' )
        // navBar.style.top = '0';
    }
} );


// tab切换
var btn = document.querySelectorAll( '.keqian' )
var changeDiv = document.querySelectorAll( '.changeDiv' )

for ( let i = 0; i < btn.length; i++ )
{

    btn[ i ].setAttribute( 'index', i )
    btn[ i ].onclick = function ()
    {
        var ind = this.getAttribute( 'index' )

        for ( var m = 0; m < changeDiv.length; m++ )
        {
            changeDiv[ m ].classList.add( 'hiden' )
            changeDiv[ m ].classList.remove( 'active1' )
            changeDiv[ ind ].classList.remove( 'hiden' )
            changeDiv[ ind ].classList.add( 'active1' )
        }
    }

}
