function fu ()
{
    var ajax_ = new XMLHttpRequest() || new ActiveXObject( 'Microsoft.XMLHTTP' );

    ajax_.open( 'get', 'http://www.chenfuguo.cn:5600/news' )
    ajax_.send()
    ajax_.onreadystatechange = function ()
    {
        if ( ajax_.readyState == 4 )
        {
            if ( ajax_.status == 200 )
            {
                var data = JSON.parse( ajax_.responseText ).news.data;
                // console.log( data );

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
    var CompanyNews = document.querySelector( '.CompanyNews' )

    var str2 = ''
    for ( var a of data2 )
    {
        str2 += `
        <div class="newsFor">
                <div class="newsSingle">
                    <img src="${ a.picUrl }" alt="">
                    <div class="newsContent">
                        <div class="contentFont">
                            <p>${ a.title }</p>
                            <span>${ a.content }</span>
                        </div>

                    </div>
                    <div class="contentImg">
                        <p>${ a.time }</p>
                        <img src="./img/下载.png" alt="">
                    </div>
                </div>
        </div>
        `
        // console.log( str2 );

    }
    CompanyNews.innerHTML = str2


}

fu()


// tab切换1
var NavList1 = document.querySelectorAll( '.NavList1' )
var tabDiv = document.querySelectorAll( ".tabDiv" )
for ( let i = 0; i < NavList1.length; i++ )
{

    NavList1[ i ].setAttribute( 'index', i )
    NavList1[ i ].onmouseenter = function ()
    {
        var inds = this.getAttribute( 'index' )

        for ( let l = 0; l < NavList1.length; l++ )
        {
            NavList1[ l ].classList.remove( 'active' )
            NavList1[ l ].classList.remove( 'active1' )
            // NavList1[ ind ].classList.add( 'active' )
            if ( inds == 0 )
            {
                NavList1[ inds ].classList.add( 'active1' )
            } else
            {
                NavList1[ inds ].classList.add( 'active' )
            }

        }
    }
    // NavList1[ i ].onmouseleave = function ()
    // {
    //     // NavList1[ 0 ].classList.remove( 'active1' )
    //     NavList1[ 1 ].classList.add( 'active' )
    // }
    NavList1[ i ].onclick = function ()
    {
        var ind = this.getAttribute( 'index' )

        for ( let k = 0; k < NavList1.length; k++ )
        {
            NavList1[ k ].classList.remove( 'active' )
            NavList1[ k ].classList.remove( 'active1' )
            // NavList1[ ind ].classList.add( 'active' )
            if ( ind == 0 )
            {
                NavList1[ ind ].classList.add( 'active1' )
            } else
            {
                NavList1[ ind ].classList.add( 'active' )
            }

        }

        for ( var m = 0; m < tabDiv.length; m++ )
        {
            tabDiv[ m ].classList.add( 'none' )
            // tabDiv[ m ].classList.remove( 'active1' )
            tabDiv[ ind ].classList.remove( 'none' )
            // tabDiv[ ind ].classList.add( 'active1' )
        }
    }


}



// tab切换1
var officeDiv = document.querySelectorAll( '.officeDiv' )
var jop = document.querySelectorAll( ".jop" )
for ( let i = 0; i < officeDiv.length; i++ )
{

    officeDiv[ i ].setAttribute( 'index', i )
    officeDiv[ i ].onclick = function ()
    {
        var ind = this.getAttribute( 'index' )

        for ( let k = 0; k < officeDiv.length; k++ )
        {
            officeDiv[ k ].classList.remove( 'border' )
            officeDiv[ ind ].classList.add( 'border' )

        }

        for ( var m = 0; m < jop.length; m++ )
        {
            jop[ m ].classList.add( 'hiden' )
            // tabDiv[ m ].classList.remove( 'active1' )
            jop[ ind ].classList.remove( 'hiden' )
            // tabDiv[ ind ].classList.add( 'active1' )
        }
    }

}