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
function fu ()
{
    var ajax_ = new XMLHttpRequest() || new ActiveXObject( 'Microsoft.XMLHTTP' );
    ajax_.open( 'get', 'http://www.chenfuguo.cn:5600/getIntroduce' )
    ajax_.send()
    ajax_.onreadystatechange = function ()
    {
        if ( ajax_.readyState == 4 )
        {
            if ( ajax_.status == 200 )
            {
                var data = JSON.parse( ajax_.responseText ).introduce.data;
                console.log( data );
                show1( data );
            } else
            {
                console.log( '请求失败' );
            }
        }
    }

}

function show1 ( data1 )
{
    console.log( data1 );
    var use = document.querySelector( '.use' )
    console.log( use );
    var str1 = ''
    for ( var a of data1 )
    {
        str1 += `
        <div class='item'>
        <div >
            <img src="${ a.iconPath }">

        </div>
        <p>${ a.title }</p>
        <span>${ a.content }</span></div>
        `
    }
    console.log( str1 );

    use.innerHTML = str1
    // var itemDiv = document.querySelector( '.item' );

    var imageArray = [
        './img/icon-100.png',
        './img/icon-102.png',
        './img/icon-104.png',
        './img/icon-100.png',
        './img/icon-106.png',
        './img/icon-108.png',
        './img/icon-110.png',
        './img/icon-112.png',
        './img/icon-114.png', ]
    // // 假设图片数组为 "imageArray"
    // const imageArray = [ "image1.jpg", "image2.jpg", "image3.jpg", ...];
    // 遍历每个 "item" div
    const itemDiv = document.querySelectorAll( ".item" );
    itemDiv.forEach( ( itemDiv ) =>
    {
        // 创建图片元素并设置图片路径
        const imgElement = document.createElement( "img" );
        imgElement.src = imageArray.shift(); // 使用 shift() 方法移除数组中第一个元素并返回该元素的值，实现按顺序添加图片
        // 将图片元素添加到第一个子元素div中
        const firstDiv = itemDiv.querySelector( "div:nth-child(1)" );
        firstDiv.appendChild( imgElement );
    } );
}
fu()






